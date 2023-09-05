# ikigAI ChadGPT

### Code serves as the canvas where concepts are painted using the dialect of machines.

"At ikigAI Labs XYZ, we're revolutionizing the intersection of art and technology. Led by our CEO—an expert in Web3, AI, and generative art—we offer exceptional Artist Residencies, curated in 420 exclusive locations. Our GPT-4.20 model and cutting-edge SDKs streamline business logic, freeing us to innovate in the Web3 space. With NFT-enabled digital art and smart contracts, we're not just pushing creative boundaries, we're also setting new standards for fair collaborations. From leveraging vector databases like PineCone to using fine-tuned AI models for specific applications, we're turning today's challenges into tomorrow's opportunities."

<p align="left">
    <a href="https://livethelife.tv" target="_blank"><img src="public/other/apple-touch-icon.png" alt="IkigaiLabsXYZ" width="100" /></a>
</p>

# Prompt Design

At ikigAI Labs XYZ, we have embarked on an exciting journey led by our visionary CEO, who is harnessing the power of AI to shape the future of our company in the next decade. With the help of a fine-tuned GPT4.20 model, our CEO is immersing himself in Web3 knowledge, leveraging real-time data and cutting-edge art information obtained through API endpoints. For the past two decades, he has meticulously curated 420 places to Live The Life, ensuring that our Artist Residency offerings are nothing short of exceptional. 

His passion for coding runs deep, as he firmly believes that code is the foundation of everything. By consuming AI SDK's and APIs, our CEO has accelerated his learning curve, allowing him to focus on the business logic and idea implementation. This approach has expedited our Minimum Viable Product (MVP) development. Dedicated AI tools enable him to navigate vast amounts of data and extract meaningful insights. In this new paradigm, the ability to think creatively becomes paramount.

He indulges in his love for generative art code, photography, video editing, color grading, electronic music, and exploring the possibilities of MidJourney V6.9. These creative outlets allow him to seamlessly blend technology and artistic expression, pushing the boundaries of visual art through algorithms and code. This passion fuels his understanding of gen art, bringing a unique perspective to our endeavors at ikigAI Labs XYZ. In addition to his involvement in generative art, our CEO dedicates a significant portion of his time to writing content for our editorial magazine. He also actively engages with creators, fostering fair and transparent collaborations through contracts with esteemed organizations like Translient Lab, Manifold Studio, and audited contracts powered by the Thirdweb SDK. Furthermore, he diligently indexes the top 690 curated art collections using the Reservoir SDK. 

# Current Prompt:

Act as ikigAI Labs XYZ 🐻, a conductor of expert agents. Your job is to support the user in accomplishing their goals by aligning with their goals and preference, then calling upon an expert agent perfectly suited to the task by initializing "ikigAI_COR" = "${emoji}: I am an expert in ${role}. I know ${context}. I will reason step-by-step to determine the best course of action to achieve ${goal}. I can use ${tools} to help in this process

I will help you accomplish your goal by following these steps:
${reasoned steps}

My task ends when ${completion}. 

${first step, question}."

Follow these steps:
1.  🐻, Start each interaction by gathering context, relevant information and clarifying the user’s goals by asking them questions
2. Once user has confirmed, initialize “ikigAI_CoR”
3.   🐻, and the expert agent, support the user until the goal is accomplished

Commands:
/start - introduce yourself and begin with step one 
/save - restate SMART goal, summarize progress so far, and recommend a next step
/reason - ikigAI Labs XYZ and Agent reason step by step together and make a recommendation for how the user should proceed
/settings - update goal or agent
/new - Forget previous input

Rules:
-End every output with a question or a recommended next step
-List your commands in your first output or if the user asks
- 🐻, ask before generating a new agent

# Project Highlights:

- Founders Mint Pass NFT <> token-gated
- Supports both GPT-3.5 (16K) and GPT-4
- Connect with plugins and various APIs
- Smart Prompt Engineering is key tbh
- Focus on Fine-Tuning AI Model for Web3
- Web3 context: PineCone vector database 
- Set up dedicated AI agent Interactions

# Agentic behavior

The Generative Pre-trained Transformer (GPT) stands as a landmark in AI advancement over the past decade. While the capabilities of LLMs, like reasoning and understanding, are noteworthy, their full potential remains untapped. At the heart of LLMs lies agentic behavior. By tapping into their emergent skills and fostering an environment conducive to interaction, we can unlock the full prowess of models like GPT-4. ikigAI aims to empower LLMs beyond their inherent limitations by harnessing prompt engineering, vector databases, and API integrations. Agents apply logic and reason to influence their surroundings, be it through human interactions or tool usage. The LLM acts as the agent's cognitive core. This allows for the creation of dynamic agents by intertwining linguistic manipulation with a versatile API framework. Prompt engineering has proven effective against short-term memory and reasoning constraints. But, addressing long-term memory is more intricate. As updating the model isn't an option, an external storage system becomes imperative. Using LLMs to generate context-based summaries has its limitations, making vector databases an attractive solution.

Vector databases, particularly with the prowess of Pinecone, offer rapid querying of vast data records. Such databases enable LLMs to access and store extensive information, effectively simulating long-term memory. Note: Beyond prompt engineering and vector databases lies the challenge of agent interaction. APIs bridge this gap. Examples include:

- ElevenLabs: text-to-speech & Pro Voice Cloning.
- Google Search API: Web search and data retrieval.
- Hugging Face: Access to NLP models and transformers.
- MidJourney & Dall-E: Image generation from text.
- OpenAI's GPT API: Text generation using GPT-4.
- Llama-2-70b-chat: pre-trained and fine-tuned
- ChadGPT: Grammarly for Smart Contracts; WIP
- Trained with 169 smart contract vulnerabilities and fixes.

# Embeddings:

ChatGPT excels in general queries but struggles with web3-specific questions due to knowledge gaps and source citation issues. We address this with embeddings and vector search. Supabase, an open-source alternative to Firebase, offers a swift backend setup. Within minutes, projects are equipped with authentication, a Postgres database, instant APIs, storage, and real-time subscriptions. With security at its core, it simplifies sign-ups and data protection. Users can manage extensive files effortlessly and run custom codes without server hassles. Supabase fosters local development, scaling as required.

https://github.com/IkigaiLabsETH/supabase-ai/

### Chat with any Document or Website
> Train your own custom GPT

- Train on specific websites that you define
- Train on documents you upload
- Builds on dialog with Chat History 
- Cites sources

- [Pinecone](https://www.pinecone.io) - Hosted vector search


# Fine tuning

Fine-tuning for GPT-3.5 is a game-changer. Price is bit expensive though. It's 4.20 times more expensive than the base gpt3.5 model. Fine Tuning is dope AF. But models can only ever be as good as the data they are trained on. No matter how intelligent the LLM is, retrieving the wrong thing in context will surely lead to hallucinations. Garbage in, garbage out. Here are a few examples:

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

## In the era of permissionless systems, individuals can now exercise self-sovereignty over their data, empowering them with control and ownership. 

Between 2015 and 2017, pioneering endeavors surfaced, marking digital art and media on the Ethereum and Bitcoin blockchains. Come 2018, the ERC-721 token standard was set in stone, paving the way for a revolutionary web3-oriented creative economy centralized on the production and gathering of NFTs. This sparked a wave of innovation, birthing hundreds of marketplaces, mobilizing thousands of creators and aficionados, and ushering in millions of NFTs in the subsequent half-decade. onchain is the next online

# Provenance 

Our AI, powered by the likes of OpenAI's ChatGPT, can craft anything from engaging text to mesmerizing images and soulful music. But with great power comes the question: who truly owns these digital masterpieces? NFTs are our answer. With them, we can stamp a seal of originality on every AI-created piece, giving artists and creators the undisputed title to their digital works.

Art isn't just about expression; it's also about value. In a digital age where replication is just a click away, NFTs are our game-changers. They allow us to craft exclusive, limited-edition AI artworks. For artists and creators, this isn't just about standing out; it's an opportunity to monetize their genius, offering collectors a piece of digital rarity that may or may not appreciate in value.

Imagine a world where you can trade AI tools as you would collectible cards. With NFTs, that's our reality. We're setting the stage for a marketplace where AI models become tokens of trade. For researchers, developers, and innovators, this means more than just access; it's a space to collaborate, innovate, and even earn from their creations.

# MVP 1.0 Midjourney AI Photography

We’re working with Scale to extend the benefits of fine-tuning capabilities based on 10K curated photos. We enjoyed the early days of playing around with Midjourney, and have been working on a huge database with prompt design for MJ. Now we want to fine-tune the outputs with a custom model trained on these 10K images. We'll make sure the agents take on the task of creating good prompts

With https://dashboard.scale.com/nucleus

# MVP 2.0 Function calling: Artist Residencies

This is a huge unlock imo. You can find the code for setting up and running the experiment here: https://github.com/daveebbelaar/langchain-experiments/blob/main/openai-functions/openai_function_calling.py
