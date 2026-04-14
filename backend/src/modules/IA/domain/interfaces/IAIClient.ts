export interface IAIClient {
  generate(prompt: string): Promise<string>;
}