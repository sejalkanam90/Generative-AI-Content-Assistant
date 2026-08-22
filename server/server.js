import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// API endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { task, inputText } = req.body;

    if (!inputText || inputText.trim() === '') {
      return res.status(400).json({
        error: 'Please provide some text.'
      });
    }

    let prompt = '';

    switch (task) {
      case 'generate':
        // Generate a professional and moderately detailed response
        prompt = `Provide a professional, clear, and well-structured response to the following request.

Keep the response between 80 and 120 words. Use simple language and 3-5 concise bullet points when appropriate. Avoid unnecessary introductions, repetition, tables, and excessive details.

Request: "${inputText}"`;
        break;

      case 'rewrite':
        // Rewrite the text while preserving its original meaning
        prompt = `Rewrite the following text clearly and professionally while keeping the original meaning intact. Keep the response concise:\n\n"${inputText}"`;
        break;

      case 'summarize':
        // Summarize the text into clear and concise key points
        prompt = `Summarize the following text into clear key points. Keep the response concise:\n\n"${inputText}"`;
        break;

      case 'ideas':
        // Generate exactly 5 short, creative, and practical ideas
        prompt = `Generate exactly 5 creative and practical ideas related to this topic: "${inputText}". Keep each idea short.`;
        break;

      default:
        prompt = inputText;
    }

    // Timing start
    const startTime = Date.now();

    const interaction = await ai.interactions.create({
      model: 'gemini-3.6-flash',
      input: prompt
    });

    // Timing end
    const endTime = Date.now();

    // Log the exact time taken
    console.log(`Gemini response time: ${endTime - startTime} ms`);

    res.json({
      success: true,
      data: interaction.output_text
    });

  } catch (error) {
    console.error('Gemini API Error:', error);

    res.status(500).json({
      error: 'Failed to generate content. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});