from langchain_openai import ChatOpenAI
import src.config.settings
import os

def get_llm():

    return ChatOpenAI(
        model="openai/gpt-4o-mini",
        api_key=os.getenv("OPENAI_API_KEY"),
        base_url="https://openrouter.ai/api/v1",
        temperature=0.5
    )