# How It Works
The script works by running an infinite loop that does the following steps:

Pulls the first task from the task list.
Sends the task to the execution agent, which uses OpenAI's API to complete the task based on the context.
Enriches the result and stores it in Chroma.
Creates new tasks and reprioritizes the task list based on the objective and the result of the previous task. The execution_agent() function is where the OpenAI API is used. It takes two parameters: the objective and the task. It then sends a prompt to OpenAI's API, which returns the result of the task. The prompt consists of a description of the AI system's task, the objective, and the task itself. The result is then returned as a string.

# Tasks
The task_creation_agent() function is where OpenAI's API is used to create new tasks based on the objective and the result of the previous task. The function takes four parameters: the objective, the result of the previous task, the task description, and the current task list. It then sends a prompt to OpenAI's API, which returns a list of new tasks as strings. The function then returns the new tasks as a list of dictionaries, where each dictionary contains the name of the task.

# Prioritization
The prioritization_agent() function is where OpenAI's API is used to reprioritize the task list. The function takes one parameter, the ID of the current task. It sends a prompt to OpenAI's API, which returns the reprioritized task list as a numbered list.

Finally, the script uses Chroma to store and retrieve task results for context. The script creates a Chroma collection based on the table name specified in the TABLE_NAME variable. Chroma is then used to store the results of the task in the collection, along with the task name and any additional metadata.

# Execution
The execution_agent() function is where the OpenAI API is used. It takes two parameters: the objective and the task. It then sends a prompt to OpenAI's API, which returns the result of the task. The prompt consists of a description of the AI system's task, the objective, and the task itself. The result is then returned as a string.

## To use the script, you will need to follow these steps:

Install the required packages: pip install -r requirements.txt
Copy the .env.example file to .env: cp .env.example .env. This is where you will set the following variables.
Set your OpenAI API key in the OPENAI_API_KEY and OPENAPI_API_MODEL variables. In order to use with Weaviate you will also need to setup additional variables detailed here.
Set the name of the table where the task results will be stored in the TABLE_NAME variable.
(Optional) Set the name of the BabyAGI instance in the BABY_NAME variable.
(Optional) Set the objective of the task management system in the OBJECTIVE variable.
(Optional) Set the first task of the system in the INITIAL_TASK variable.
Run the script: python babyagi.py
All optional values above can also be specified on the command line.