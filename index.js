import 'dotenv/config'
import OpenAI from 'openai';
const openai  = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const results = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages:[
        {
            role:'system',
            content:'You are an AI assistant, answer any questions to th best of your ability.',
        },
        {
            role: 'user',
            content:'hi, tell how to get ai developer job',
        }
    ]
})

console.log(results.choices[0])