import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error(
        "GEMINI_API_KEY not found in .env.local"
      );
    }

    const knowledgeFilePath = path.resolve(
      "knowledge",
      "nexkripa-knowledge.txt"
    );

    if (!fs.existsSync(knowledgeFilePath)) {
      throw new Error(
        `Knowledge file not found: ${knowledgeFilePath}`
      );
    }

    console.log("Creating NexKripa File Search Store...");

    const store =
      await ai.fileSearchStores.create({
        config: {
          displayName:
            "NexKripa Official Knowledge Base",
        },
      });

    console.log("\nStore created successfully:");
    console.log(store.name);

    console.log(
      "\nUploading NexKripa knowledge..."
    );

    let operation =
      await ai.fileSearchStores.uploadToFileSearchStore({
        file: knowledgeFilePath,

        fileSearchStoreName: store.name,

        config: {
          displayName:
            "NexKripa Official Knowledge",
        },
      });

    /*
      Upload/indexing can take some time.
      Wait until Gemini finishes processing it.
    */
    while (!operation.done) {
      console.log(
        "Processing and indexing knowledge..."
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );

      operation =
        await ai.operations.get({
          operation,
        });
    }

    console.log(
      "\n✅ NexKripa knowledge uploaded successfully!"
    );

    console.log("\nIMPORTANT:");
    console.log(
      "Copy this value into your .env.local file:"
    );

    console.log(
      `GEMINI_FILE_SEARCH_STORE=${store.name}`
    );
  } catch (error) {
    console.error(
      "\n❌ Knowledge upload failed:"
    );

    console.error(error);
  }
}

main();