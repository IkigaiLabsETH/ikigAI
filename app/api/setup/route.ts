import { NextResponse } from 'next/server'
import { PineconeClient } from '@pinecone-database/pinecone'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import {
  createPineconeIndex,
  updatePinecone
} from 'config/pineconeutils'
import { indexName } from 'config/pineconeconfig'

type Document<T> = {
  pageContent: string;
  metadata: T;
};

export async function POST() {
  const loader = new DirectoryLoader('./documents', {
    ".txt": (path) => new TextLoader(path),
    ".md": (path) => new TextLoader(path),
    ".pdf": (path) => new PDFLoader(path)
  })

  const docs = await loader.load()
  const vectorDimensions = 1536

  const client = new PineconeClient()
  await client.init({
    apiKey: process.env.PINECONE_API_KEY || '',
    environment: process.env.PINECONE_ENVIRONMENT || ''
  })

  try {
        // Ensure each document in the `docs` array has the required properties
        const validatedDocs = docs.map((doc) => {
          return {
            pageContent: '', // Add the required `pageContent` property
            metadata: doc // Use the original document as the `metadata`
          };
        });
    await createPineconeIndex(client, indexName, vectorDimensions)
    await updatePinecone(client, indexName, validatedDocs );
  } catch (err) {
    console.log('error: ', err)
  }

  return NextResponse.json({
    data: 'successfully created index and loaded data into pinecone...'
  })
}