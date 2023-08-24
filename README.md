# AI studio creating a personal AI for web3

Permissionless systems that allow you to have self-sovereignty over your data. Code is just a way you express your ideas in computer language. With dedicated AI tools, knowledge is 'less' important, what's vital is critical thinking.


<h4 align="left"><b>Meet Our CEO</b></h4>

<p align="left">
    <a href="https://livethelife.tv" target="_blank"><img src="public/other/apple-touch-icon.png" alt="IkigaiLabsXYZ" width="100" /></a>
</p>


## GPT4.20 + MJ V6.9

Our new ikigAI Labs XYZ CEO is highly approachable but isn't well-versed with the intricacies of gen art, web3, and our editorial style @livethelife.tv We believe that leveraging the AI with Bespoke Prompt Design and web3 datapoints will enhance his proficiency.

# Project Highlights:

Utilizes the OpenAI API.
Integrated with Authentication, Session Management, and Token Tracking.
Billing features present (currently deactivated).
Comprehensive understanding of the Ikigai Labs XYZ codebase and associated tech stack.
Supports both GPT-3.5 and GPT-4. Notably, GPT-3.5 offers a 16k context window via the API.
Enhanced capabilities to connect with plugins and various APIs.

## 🔥 Features

- Prompt library
- Organize chats into folders (with colours)
- Filter chats and folders
- Token count and pricing
- YouTube, Midjourney, WhatsApp integration
- Camera Capture and Generative Voice AI
- Custom model parameters (e.g. presence_penalty)
- Chat as user / assistant / system
- Edit, reorder and insert any messages, anywhere
- Chat title generator
- Save chat automatically to local storage
- Import / Export chat
- Download chat (markdown / image / json)
- Sync to Google Drive and/or AWS S3
- Integration with Google Search API
- Azure OpenAI endpoint support
- Replicate endpoint support
- Multiple language support (i18n)
- Unlimited local storage (desktop)
- Runs locally (desktop)

# Leveraging the Power of Large Language Models (LLMs)

The Generative Pre-trained Transformer (GPT) stands as a landmark in AI advancement over the past decade. While the capabilities of LLMs, like reasoning and understanding, are noteworthy, their full potential remains untapped.

At the heart of LLMs lies agentic behavior. By tapping into their emergent skills and fostering an environment conducive to interaction, we can unlock the full prowess of models like GPT-4. ikigAI aims to empower LLMs beyond their inherent limitations by harnessing prompt engineering, vector databases, and API integrations.

Agents apply logic and reason to influence their surroundings, be it through human interactions or tool usage. The LLM acts as the agent's cognitive core. This allows for the creation of dynamic agents by intertwining linguistic manipulation with a versatile API framework.

Prompt engineering has proven effective against short-term memory and reasoning constraints. But, addressing long-term memory is more intricate. As updating the model isn't an option, an external storage system becomes imperative. Using LLMs to generate context-based summaries has its limitations, making vector databases an attractive solution.

Vector databases, particularly with the prowess of Pinecone, offer rapid querying of vast data records. Such databases enable LLMs to access and store extensive information, effectively simulating long-term memory.

Beyond prompt engineering and vector databases lies the challenge of agent interaction. APIs bridge this gap. Examples include:

- ElevenLabs: text-to-speech & Pro Voice Cloning.
- Google Search API: Web search and data retrieval.
- Hugging Face: Access to NLP models and transformers.
- Dall-E: Image generation from text.
- OpenAI's GPT API: Text generation using GPT-4.

Combining API tools and prompt engineering, we can enhance agents' environmental interactions. Achieving consistent function calls from LLMs is a challenge that the ReAct framework and vector databases can address. With the release of gpt-4-0613 and gpt-3.5-turbo-16k-0613 by OpenAI, we can harness native function calls and JSON fine-tuning. This synergy of prompt methods, vector databases, and API tools supercharges any model.

# Embeddings and Their Application:

ChatGPT excels in general queries but struggles with web3-specific questions due to knowledge gaps and source citation issues. We address this with embeddings and vector search.

# Introducing Supabase:

Supabase, an open-source alternative to Firebase, offers a swift backend setup. Within minutes, projects are equipped with authentication, a Postgres database, instant APIs, storage, and real-time subscriptions. With security at its core, it simplifies sign-ups and data protection. Users can manage extensive files effortlessly and run custom codes without server hassles. Supabase fosters local development, scaling as required. It's user-friendly, eliminating the need for database expertise. In essence, Supabase combines speed, reliability, and efficiency for seamless data management.

https://github.com/IkigaiLabsETH/supabase-ai/

## Chat with any Document or Website
> Train your own custom GPT

- Train on specific websites that you define
- Train on documents you upload
- Builds on dialog with Chat History 
- Cites sources

- [Pinecone](https://www.pinecone.io) - Hosted vector search

#### Supported Files
- [x] .pdf
- [x] .docx
- [x] .md
- [x] .txt
- [x] .png
- [x] .jpg
- [x] .html
- [x] .json

#### Coming Soon
- [ ] .csv
- [ ] .pptx
- [ ] notion
- [ ] next 13 app dir
- [ ] vercel ai sdk


# OpenAI Edge

A TypeScript module for querying OpenAI's API using `fetch` (a standard Web API)
instead of `axios`. This is a drop-in replacement for the official `openai`
module (which has `axios` as a dependency).

As well as reducing the bundle size, removing the dependency means we can query
OpenAI from edge environments. Edge functions such as Next.js Edge API Routes
are very fast and, unlike lambda functions, allow streaming data to the client.

The latest version of this module has feature parity with the official `v3.3.0`.

> **Update July 2023:** The official `openai` library will use `fetch` in v4,
> hopefully making `openai-edge` redundant. You can try it in beta now, more
> info here: https://github.com/openai/openai-node/discussions/182


