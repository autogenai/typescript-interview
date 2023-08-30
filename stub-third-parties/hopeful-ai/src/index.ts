import express, { Request, Response } from 'express';
import { z } from 'zod';
import { generateText } from './text-generator';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const requestSchema = z.object({
  prompt: z.string().min(1).max(1000),
  temperature: z.number().min(0).max(1),
});

app.post('/', async (req: Request, res: Response) => {
  try {
    const parseResult = requestSchema.safeParse(req.body);
    
    if (!parseResult.success) {
      res.status(400).json(parseResult.error);
      return;
    }

    const response = await generateText();
    res.json(response);
  }
  catch (e) {
    console.log(e);
    res.status(500).json();
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: HopefulAI is running at http://localhost:${port}`);
});