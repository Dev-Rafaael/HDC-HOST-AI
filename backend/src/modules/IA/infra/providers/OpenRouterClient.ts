import { IAIClient } from "../../domain/interfaces/IAIClient";
import { OpenRouterResponse } from "../../dtos/OpenRouterResponse";

export class OpenRouterClient implements IAIClient {
  async generate(prompt: string): Promise<string> {
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b:free",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!res.ok) throw new Error("Erro na IA");

      const data = (await res.json()) as OpenRouterResponse;

      return data.choices?.[0]?.message?.content || "";

    } catch (error) {
      console.error(error);
      throw new Error("Falha ao chamar IA");
    }
  }
}