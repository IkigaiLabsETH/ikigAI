# supabase-template

## Get started

0. Make sure you have [Docker](https://www.docker.com/) installed and running

1. Clone this repo

2. Install dependencies, including the Supabase CLI

```bash
yarn
```

**Note**: If you install the Supabase CLI using a different method you have to make sure you are on version 1.49.4 as more recent versions currently suffer from an issue which prevents this from working correctly.

3. Create frontend env file

```bash
cp .env.example .env
```

4. Create supabase functions env file

```bash
echo "OPENAI_API_KEY=sk-xxx" > supabase/.env
```

5. If not already running, start Docker. Learn how to do this for your OS [here](https://docs.docker.com/desktop/).

6. Start the supabase project.

```bash
npx supabase start
```

7. Start the supabase functions locally

```bash
yarn supabase:dev
```

8. Start the frontend locally

```bash
yarn dev
```

9. Open [http://localhost:3100](http://localhost:3100) with your browser to see the result.

## Deploy

1. Create a new project on [Supabase](https://supabase.io)

2. Create a new project on [Vercel](https://vercel.com)

3. To deploy the frontend, connect your Vercel project to your GitHub repo and push to main.

4. To deploy the supabase functions, first login to Supabase:

```bash
npx supabase login
```

Then, link your project:

```bash
npx supabase link --project-ref <project-ref>
```

Then, deploy the functions:

```bash
yarn supabase:deploy
```

Optionally, if you're also using the Supabase Vector Store from LangcChain, you'll need to push the schema to the database:

```bash
supabase db push
```

MIT License

Copyright (c) 2023 langchain-ai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.