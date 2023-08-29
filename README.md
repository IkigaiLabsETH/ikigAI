# ikigAI studio training our CEO

In the era of permissionless systems, individuals can now exercise self-sovereignty over their data, empowering them with control and ownership. Code, at its core, is a medium through which ideas are expressed in the language of computers. While knowledge remains valuable, the advent of dedicated AI tools has shifted the emphasis towards critical thinking. These tools enable us to navigate vast amounts of data and extract meaningful insights. In this new paradigm, the ability to think critically and creatively becomes paramount.

<p align="left">
    <a href="https://livethelife.tv" target="_blank"><img src="public/other/apple-touch-icon.png" alt="IkigaiLabsXYZ" width="100" /></a>
</p>

# GPT4.20 + MJ V6.9

At ikigAI Labs XYZ, we have embarked on an exciting journey led by our visionary CEO, who is harnessing the power of AI to shape the future of our company in the next decade. With the help of a fine-tuned GPT4.20 model, our CEO is immersing himself in web3 knowledge, leveraging real-time data and cutting-edge art information obtained through API endpoints. For the past two decades, he has meticulously curated 420 places to Live The Life, ensuring that our Artist Residency offerings are nothing short of exceptional. 

His passion for coding runs deep, as he firmly believes that code is the foundation of everything. By consuming AI sdk's and api's, our CEO has accelerated his learning curve, allowing him to focus on the business logic and idea implementation. This approach has expedited our Minimum Viable Product (MVP) development.

He indulges in his love for generative art code, photography, video editing, color grading, electronic music, and exploring the possibilities of MidJourney V6.9. These creative outlets allow him to seamlessly blend technology and artistic expression, pushing the boundaries of visual art through algorithms and code. This passion fuels his understanding of gen art, bringing a unique perspective to our endeavors at ikigAI Labs XYZ. In addition to his involvement in generative art, our CEO dedicates a significant portion of his time to writing content for our editorial magazine. He also actively engages with creators, fostering fair and transparent collaborations through contracts with esteemed organizations like Translient Lab, Manifold Studio, and audited contracts powered by the Thirdweb SDK. Furthermore, he diligently indexes the top 1000 curated art collections using the Reservoir SDK. 

Staying ahead of the curve is paramount in the rapidly evolving world of Web3. That's why our CEO leverages Web3 APIs, keeping his finger on the pulse of the market to seize opportunities that align with our vision. 

# Project Highlights:

- Utilizes the OpenAI API.
- Integrated with Authentication, Session Management, and Token Tracking.
- Billing features present (currently deactivated). Adding NFT & token gate.
- Comprehensive understanding of the Ikigai Labs XYZ codebase & tech stack.
- Supports both GPT-3.5 (16K) and GPT-4. 
- Connect with plugins and various APIs.

## API GPT ROUTE.TS

This is an experimental project using OpenAI GPT Plugins and Replicate to combine all AI APis into one.

Instead of using separate interfaces for image generation, video generation, audio generation, and general text natural language processing, this app combines all of them together into a single prompt.

APIs currently supported:
- Text to image
- Text to video
- Text to audio
- General natural language processing

Examples of what you might ask:

- Create a 4-day travel itinerary for Paris.
- Create an image of someone in their production studio creating beats, futuristic, dim lighting, new york
- Create a track that sounds like it might come from Kanye West, hip-hop, soul samples, heavy drums, innovative melodies, experimental sounds, unusual effects, automation, modulating filters, distortion effects
- Create a video of clownfish swimming in a coral reef, beautiful, 8k, perfect, award-winning, national geographic

## Wen 🔥 Features (soon)

- Prompt library
- Organize chats into folders (with colors)
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
- MidJourney & Dall-E: Image generation from text.
- OpenAI's GPT API: Text generation using GPT-4.

Combining API tools and prompt engineering, we can enhance agents' environmental interactions. Achieving consistent function calls from LLMs is a challenge that the ReAct framework and vector databases can address. With the release of gpt-4-0613 and gpt-3.5-turbo-16k-0613 by OpenAI, we can harness native function calls and JSON fine-tuning. This synergy of prompt methods, vector databases, and API tools supercharges any model.

# Embeddings and Their Application:

ChatGPT excels in general queries but struggles with web3-specific questions due to knowledge gaps and source citation issues. We address this with embeddings and vector search.

# Introducing Supabase:

Supabase, an open-source alternative to Firebase, offers a swift backend setup. Within minutes, projects are equipped with authentication, a Postgres database, instant APIs, storage, and real-time subscriptions. With security at its core, it simplifies sign-ups and data protection. Users can manage extensive files effortlessly and run custom codes without server hassles. Supabase fosters local development, scaling as required.

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
V4 is out now! https://github.com/openai/openai-node/blob/v4/api.md

**Node version 18.x.x**

// consider for auth? https://clerk.com/docs/quickstarts/nextjs


## WTF is FT GPT 3.5 (scale)

Fine-tuning for GPT-3.5 is a game-changer. Price is bit expensive though. It's 4.20 times more expensive than the base gpt3.5 model. Here are a few examples of applications that will benefit from this development:

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

# Why we're diving deep into web3

**1. Authenticity & Ownership:** Our AI, powered by the likes of OpenAI's ChatGPT, can craft anything from engaging text to mesmerizing images and soulful music. But with great power comes the question: who truly owns these digital masterpieces? NFTs are our answer. With them, we can stamp a seal of originality on every AI-created piece, giving artists and creators the undisputed title to their digital works.

**2. Elevating Value with Digital Rarity:** Art isn't just about expression; it's also about value. In a digital age where replication is just a click away, NFTs are our game-changers. They allow us to craft exclusive, limited-edition AI artworks. For artists and creators, this isn't just about standing out; it's an opportunity to monetize their genius, offering collectors a piece of digital rarity that may or may not appreciate in value.

**3. A Marketplace for AI Brilliance:** Imagine a world where you can trade AI tools as you would collectible cards. With NFTs, that's our reality. We're setting the stage for a bustling marketplace where AI models become tokens of trade. For researchers, developers, and innovators, this means more than just access; it's a space to collaborate, innovate, and even earn from their creations.

# Scale on 10K photos

We’re working with Scale as a preferred partner to extend the benefits of our fine-tuning capability given their experience helping enterprises securely and effectively leverage data for AI. Building robust enterprise-grade functionality requires rigorous data enrichment and model evaluation. 

With https://dashboard.scale.com/nucleus

# Function calling: Flights 

This is a huge unlock imo. You can find the code for setting up and running the experiment here: https://github.com/daveebbelaar/langchain-experiments/blob/main/openai-functions/openai_function_calling.py

Note: Make sure your device has Python 3.9 or higher and an up-to-date version of Langchain module to execute the scripts successfully. Below the key steps in the code. First load the OpenAI token from the .env file.

### Execute use case 1:
Ask ChatGPT a question regarding flight information.
Implement function calling, compare outcome.
Implement a hard-coded function, compare outcome.

### Execute use case 2:
Implement 3 functions and test them with different prompts.
Implement conversational chat model with Langchain with the functions and test it with a prompt with several requests.


## Fine Tuning is dope AF. But models can only ever be as good as the data they are trained on. No matter how intelligent the LLM is, retrieving the wrong thing in context will surely lead to hallucination. Garbage in, garbage out.


### 1. **Cost vs. Efficiency**:

**Advantages of Fine-Tuning**:
- **Precision**: Fine-tuned models, as you've noted, can produce more accurate and stylistically consistent results, especially when the desired outputs are well-defined.
  
**Disadvantages of Fine-Tuning**:
- **Cost**: The major disadvantage is the cost associated with both the tuning and then the continued use of these specialized models. 

### 2. **Effort of Fine-Tuning vs. Better Prompting**:

Prompt engineering and chaining are strategies that can be effective without the added costs of fine-tuning. However, there are use-cases where no amount of prompt engineering can achieve the consistency and precision of a fine-tuned model, especially if the domain is narrow and specific.

### 3. **Deprecation Concerns**:

If OpenAI (or any model provider) decides to deprecate a model version, any investment (financial, time, data) into fine-tuning that model may become obsolete. This could be particularly concerning for businesses that have built products or services around the specific behaviors of a fine-tuned model.

### 4. **Potential Strategies and Solutions**:

- **Hybrid Approach**: Combining the strengths of fine-tuning with prompt engineering might be an optimal solution for many. The model can be fine-tuned to a certain extent to understand a domain, and then precise prompting can be used to extract the required information or response style.
  
- **Investment Analysis**: Before diving into fine-tuning, businesses or individuals should conduct a cost-benefit analysis. If the added precision from fine-tuning results in significantly better user experience, customer satisfaction, or other tangible benefits, then the costs might be justifiable.
  
- **Stay Updated**: Organizations that rely heavily on a particular model should stay in close communication with the model provider. This way, they can get early information about potential deprecations or changes and plan accordingly.

### 5. **Future Trends**:

As AI continues to evolve, we'll likely see shifts in pricing models, capabilities, and fine-tuning methodologies. Moreover, competition might drive costs down, or new business models might emerge, allowing users to fine-tune without the significant markup.

### Conclusion:

The decision to invest in fine-tuning versus other strategies depends heavily on the specific use-case, budget, and long-term goals. While fine-tuning offers unparalleled precision in certain scenarios, it's essential to weigh its benefits against its costs and potential long-term implications.
