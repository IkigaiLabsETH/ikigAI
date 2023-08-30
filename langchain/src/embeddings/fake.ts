import { Embeddings, EmbeddingsParams } from "./base.js";

export class FakeEmbeddings extends Embeddings {
  constructor(params?: EmbeddingsParams) {
    super(params ?? {});
  }

  embedDocuments(documents: string[]): Promise<number[][]> {
    return Promise.resolve(documents.map(() => [0.1, 0.2, 0.3, 0.4]));
  }

  embedQuery(_: string): Promise<number[]> {
    return Promise.resolve([0.1, 0.2, 0.3, 0.4]);
  }
}
