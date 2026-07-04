# 🤖 Local AI Chatbot using LangChain

A simple AI chatbot built with **LangChain**, **OpenAI (via OpenRouter)**, and **LangSmith**. This project demonstrates how to set up a local AI development environment, create a simple LangChain chain, and trace LLM interactions using LangSmith.

---

## 📌 Project Overview

This project was developed as part of the AI Engineering learning path to demonstrate the fundamentals of building applications with Large Language Models (LLMs).

The chatbot accepts user input from the terminal, sends it to an LLM through a LangChain chain, and returns AI-generated responses. LangSmith tracing is enabled to monitor and inspect every interaction.

---

## 🚀 Features

- ✅ LangChain Expression Language (LCEL)
- ✅ OpenAI integration (via OpenRouter)
- ✅ Prompt Templates
- ✅ Simple chatbot chain
- ✅ LangSmith tracing
- ✅ Environment variable management using `.env`
- ✅ Modular project structure

---

## 🛠️ Tech Stack

- Python 3.9+
- LangChain
- LangChain OpenAI
- OpenRouter
- LangSmith
- python-dotenv

---

## 📂 Project Structure

```
local-ai-chatbot/
│
├── docs/
│   └── setup_guide.md
│
├── screenshots/
│
├── src/
│   ├── chains/
│   │   └── chatbot_chain.py
│   │
│   ├── config/
│   │   └── settings.py
│   │
│   ├── models/
│   │   └── llm.py
│   │
│   ├── prompts/
│   │   └── chatbot_prompt.py
│   │
│   ├── memory/
│   │   └── chat_history.py
│   │
│   └── main.py
│
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/local-ai-chatbot.git

cd local-ai-chatbot
```

---

### 2. Create a Virtual Environment

**Windows**

```bash
python -m venv venv

venv\Scripts\activate
```

**macOS / Linux**

```bash
python3 -m venv venv

source venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
OPENAI_API_KEY=your_openrouter_api_key

LANGCHAIN_API_KEY=your_langsmith_api_key

LANGCHAIN_TRACING_V2=true

LANGCHAIN_PROJECT=local-ai-chatbot
```

---

## ▶️ Running the Application

Run the chatbot from the project root:

```bash
python -m src.main
```

Example:

```
AI Chatbot Started
Type 'exit' to quit

You: What is LangChain?

AI: LangChain is...
```

Type:

```
exit
```

to close the chatbot.

---

## 🧠 How It Works

```
User Input
      │
      ▼
Chat Prompt Template
      │
      ▼
LangChain Chain
      │
      ▼
ChatOpenAI (OpenRouter)
      │
      ▼
AI Response
```

The chatbot uses the LangChain Expression Language (LCEL):

```python
chain = prompt | llm
```

The chain is invoked using:

```python
response = chain.invoke(
    {
        "question": user_input
    }
)
```

---

## 📊 LangSmith Tracing

LangSmith is used to trace every interaction with the language model.

Each request records:

- Prompt
- Model invocation
- Response
- Execution time

This helps with debugging, monitoring, and understanding how the chain executes.

---

## 📸 Screenshots

Add screenshots of:

- Chatbot running in the terminal
- LangSmith trace dashboard

Example:

```
screenshots/
├── chatbot.png
└── langsmith_trace.png
```

---

## 📚 Concepts Demonstrated

- LangChain
- ChatPromptTemplate
- ChatOpenAI
- LangChain Expression Language (LCEL)
- Chain Invocation
- Prompt Engineering
- Environment Variables
- LangSmith Observability

---

## 📦 Future Improvements

- Conversation memory
- Streamlit or Flask web interface
- PDF Question Answering
- Retrieval-Augmented Generation (RAG)
- Chat history persistence
- Multiple LLM provider support

---

## 👨‍💻 Author

**Kanak K**

AI Engineering Learning Project

---