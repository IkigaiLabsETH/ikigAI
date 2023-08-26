
export const indexName = 'my-test-pinecone-index'
export const timeout = 180000

export interface Client {
  // Define the properties and methods of the Client interface here
}

export class Index {
  // Define the properties and methods of the Index class here
  // ...

  query(queryRequest: any) {
    // Implement the query method logic here
    // ...
  }

  upsert(upsertRequest: any) {
    // Implement the upsert method logic here
    // ...
  }
}