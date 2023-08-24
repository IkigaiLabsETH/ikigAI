# AI studio creating a personal AI for web3

Permissionless systems that allow individuals to have self-sovereignty over their data

<h4 align="left"><b>Meet Our CEO</b></h4>

<p align="left">
    <a href="https://livethelife.tv" target="_blank"><img src="public/other/apple-touch-icon.png" alt="IkigaiLabsXYZ" width="100" /></a>
</p>


## GPT4.20 + MJ V6.9 is a match made in heaven tbh.

The CEO is super friendly, however he lacks knowledge about gen art, web3, the Ikigai Labs repo and our specific editorial style, and we feel he could become a better CEO as the use of the openai API allows us to remix it, add specific features, pull in specific web3 and NFT data and fix our own painpoints. This project is using OpenAI and its API layer. It is baked in with Authentication, Session Management, Token Tracking, as well as Billing (currently disabled). This MVP will fully understand the structure of the Ikigai Labs XYZ codebase and the tech stack we use. GPT-3.5 and GPT-4 can now access plugins and other APIs through the OpenAI API. GPT-3.5 gets a 16k context window via API, four times larger than ChatGPT

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

The invention of the Generative Pre-trained Transformer (GPT) is one of the recent decade's most important advancements in AI technology. The GPTs powering today's Large Language Models (LLMs) demonstrate a remarkable ability for reasoning, understanding, and planning. However, their true potential has yet to be fully realized.

We believe that the true power of LLMs lies in agentic behavior. By engineering a system that draws on LLMs' emergent abilities and providing an ecosystem that supports environmental interactions, we can draw out the full potential of models like GPT-4.

By providing a platform to give LLMs agentic abilities, AgentGPT aims to overcome the limitations of standalone LLMs by leveraging prompt engineering techniques, vector databases, and API tooling.

In a general sense, agents are rational actors. They use thinking and reasoning to influence their environment. This could be in the form of solving problems or pursuing specific goals. They might interact with humans or utilize tools. Ultimately, we can apply this concept to LLMs to instill more intelligent and logical behavior.

In AgentGPT, large language models essentially function as the brain of each agent. As a result, we can produce powerful agents by cleverly manipulating the English language and engineering a framework that supports interoperability between LLM completions and a diverse set of APIs.

While we have seen that prompt engineering is largely effective in resolving issues with short-term memory and reasoning, we cannot solve long-term memory solely through clever English. Since we are not allowed to update the model to learn our data, we must build an external system for storing and retrieving knowledge.

A clever solution might use an LLM to generate summaries of previous conversations as context for the prompt. However, there are three significant issues with this. First, we are diluting the relevant information for the conversation; second, it introduces another cost area by paying for API usage for those summaries; and third, it's unscalable.

Thus, prompts appear to be ineffective for long-term memory. Seeing as long-term memory is a problem of storage and efficient retrieval of information, there is no absence of research in the study of search, so we must look towards vector databases.

Vector databases have been hyped up for a while now, and the hype is very deserved. They are an efficient way of storing and retrieving vectors by allowing us to use some fun new algorithms to query billions - even trillions - of data records in milliseconds.

Pinecone does all the hard work of managing our vectors. They provide an API that allows us to upload embeddings, perform various types of searches, and store those vectors for later. They provide the typical CRUD functions we need to instill memory into LLMs in easily-accessible Python modules. By using them, we can encode large amounts of information for future storage and retrieval. For instance, when the LLM needs extra knowledge to complete a task, we can prompt it to query the vector space to find relevant information. Thus, we can create long-term memory.

While prompt engineering and vector databases resolve many of the limitations and challenges of LLMs, there is still the problem of agent interaction. How can we extend the capabilities of an LLM to interact with the environment outside of text? APIs are the answer. By utilizing APIs, we can give our agents the ability to perform a wide range of actions and access external resources.

Here are a few examples:

Google Search API: Allows agents to search the web and retrieve relevant information.
Hugging Face: Provides access to various NLP models and transformers for tasks such as summarization, translation, sentiment analysis, and more.
Dall-E: Enables agents to generate images from textual descriptions.
OpenAI's GPT API: Allows agents to utilize the GPT-4 model for text completion and generation.

Using API tools in combination with prompt engineering techniques, we can create prompts that generate predictable function calls and utilize the output of API requests to enhance the agent's capabilities. This enables agents to interact with the environment in a meaningful way beyond text-based interactions.

Getting the LLM to issue a function call consistently is challenging. A minor solution may include adjusting the temperature of the model (a parameter to control the randomness), but the best solution should leverage an LLM's reasoning abilities. Thus, we can use the ReAct framework to help the llm understand when to issue function calls.

In doing this, we will still run into another major issue. How will the LLMs understand what tools are at their disposal? We could include the available tools in a prompt, but this could significantly increase the number of tokens we would need to send to the model. Thus, we would use vector databases to help the LLM look up relevant tools it needs.This format should include provisions for the name of the function and the parameters it takes, and it must include delimiters that allow us to parse and execute the response for those parameters programmatically. For instance, you can prompt the model to only return responses in JSON and then use built-in Python libraries to parse the stringified JSON.In late June, OpenAI released gpt-4-0613 and gpt-3.5-turbo-16k-0613. They natively support function calls by using a model fine-tuned for JSON to return easy-to-use function calls.  We can give any model superpowers using novel prompting methods, efficient vector databases, and abundant API tools.

## How embeddings work:

ChatGPT is a great tool for answering general questions, but it falls short when it comes to answering web3-specific questions as it often makes up answers to fill its knowledge gaps and doesn't cite sources. To solve this issue, we will use embeddings coupled with vector search.
	
Supabase is an open-source firebase alternative using which businesses can generate a backend within 2 minutes. It enables users to start their projects with an authentication, Postgres database, instant APIs, storage and real-time subscription. Supabase also takes care of the organisations’ security and provides features of sign-ups and logins for protecting their data. Users can store, organise and share large files with ease, including videos and images. They can write down personalised codes and cron jobs without even scaling or deploying servers. It allows users to develop applications locally and then go on a big level when the organisation is ready. To work with Supabase, it’s not required for organisations to hire database experts. The platform is so simple that even non-techies can understand and use its full features easily. To an organisation, Supabase offers speed and reliability by managing their data in an efficient way.

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


