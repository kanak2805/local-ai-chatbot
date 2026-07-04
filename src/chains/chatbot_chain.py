from src.prompts.chatbot_prompt import get_prompt
from src.models.llm import get_llm

def get_chain():

    prompt = get_prompt()

    llm = get_llm()

    chain = prompt | llm

    return chain