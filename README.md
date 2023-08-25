# AI studio creating a personal AI for web3

Permissionless systems that allow you to have self-sovereignty over your data. Code is just a way you express your ideas in computer language. With dedicated AI tools, knowledge is 'less' important, what's vital is critical thinking.

<h4 align="left"><b>Meet Our CEO</b></h4>

<p align="left">
    <a href="https://livethelife.tv" target="_blank"><img src="public/other/apple-touch-icon.png" alt="IkigaiLabsXYZ" width="100" /></a>
</p>


## GPT4.20 + MJ V6.9

Our newly appointed CEO at ikigAI Labs XYZ is known for being approachable, but lacks expertise in gen art, web3, and our editorial style at @livethelife.tv. To address this, we plan to enhance his knowledge by utilizing a fine-tuned GPT4.20 model. The CEO will undergo training using real-time web3 data and general art information obtained through API endpoints. Of course, he hasn't overlooked the top 1000 places to Live The Life, which he has been curating for the past two decades. 

In addition, it is worth mentioning that our new CEO has a deep passion for coding. He firmly believes that code is everything and everything is code. His enthusiasm for technology and programming has been a driving force behind his success. With the assistance of OpenAI, the learning curve has been significantly increased, allowing him to focus more on the actual business logic and idea implementation. This has paved the way for a faster path towards Minimum Viable Product (MVP) development, streamlining our operations and accelerating innovation. 

During his free time, our CEO indulges in his love for working on generative art code, photography, and playing around with MidJourney V6.9 It serves as a creative outlet for him, allowing him to explore the intersection of technology and artistic expression. By experimenting with algorithms and code, he enjoys pushing the boundaries of what is possible in the realm of visual art. This passion further fuels his understanding and appreciation for the intricacies of gen art, enabling him to bring a unique perspective to our endeavors at ikigAI Labs XYZ.

In addition to his involvement in generative art, a significant portion of our CEO's time is dedicated to writing content for our editorial magazine. Furthermore, he actively engages with creators by deploying contracts with esteemed organizations such as Translient Labs and Manifold Studio, ensuring fair and transparent collaborations. Our CEO also oversees the development of bespoke audited contracts powered by the Thirdweb SDK. Additionally, he devotes time to index the top 1000 curated art collections using the Reservoir SDK, allowing for easy access to these valuable data resources. Staying informed and up-to-date is crucial in the rapidly evolving world of web3. Hence, our CEO keeps a finger on the pulse of the market by leveraging the power of the top 10 web3 APIs. This enables him to make well-informed decisions and seize opportunities that align with our mission and vision.

# Project Highlights:

Utilizes the OpenAI API.
Integrated with Authentication, Session Management, and Token Tracking.
Billing features present (currently deactivated).
Comprehensive understanding of the Ikigai Labs XYZ codebase and associated tech stack.
Supports both GPT-3.5 and GPT-4. Notably, GPT-3.5 offers a 16k context window via the API.
Enhanced capabilities to connect with plugins and various APIs.

## Wen 🔥 Features (soon)

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

# How: Leveraging the Power of Large Language Models

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


# Why OpenAI Edge

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


## WTF is FT GPT 3.5 (scale)

Fine-tuning for GPT-3.5 is a game-changer. Price is bit expensive though. It's 4x expensive than the base gpt3.5 model.Here are a few examples of applications that will benefit from this development:

- Content Creation: 
Tailored for our LiveTheLifeTV Gen Art, Photography & Travel Magazine.

- Shopping Assistants: 
Designed to understand and respond to specific LTL product queries.

- Financial Analysis: 
Analyze real estate values, or the cryptocurrency industry.

- Creative Arts: 
Music composition and art design tools tailored for photography.

- Travel Assistants: 
Guides for curated regions, offering travel tips.

- Real Estate: 
Property suggestions near worldclass surf.

- Weather Forecasting: 
Detailed weather analyses for surfers or snowboarders.

TLDR: https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates

# Scale on 10K photos

We’re working with Scale as a preferred partner to extend the benefits of our fine-tuning capability given their experience helping enterprises securely and effectively leverage data for AI. Building robust enterprise-grade functionality requires rigorous data enrichment and model evaluation. 

With https://dashboard.scale.com/nucleus