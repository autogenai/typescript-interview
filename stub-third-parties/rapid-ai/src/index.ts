import express, { Request, Response } from 'express';
import { z } from 'zod';
import { generateText } from './text-generator';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

const requestSchema = z.object({
  question: z.string().min(1).max(1000),
  creativity: z.number().min(0).max(1),
  answerLength: z.number().min(1).max(500)
});

app.post('/', async (req: Request, res: Response) => {
  try {
    const parseResult = requestSchema.safeParse(req.body);
    
    if (!parseResult.success) {
      res.status(400).json(parseResult.error);
      return;
    }

    const answer = await generateText(parseResult.data.question);
    res.json({ answer, tokens: answer.split("").length });
  }
  catch (e) {
    console.log(e);
    res.status(500).json();
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: RapidAI is running at http://localhost:${port}`);
});