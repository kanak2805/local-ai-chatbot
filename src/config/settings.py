from dotenv import load_dotenv
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent.parent
load_dotenv(BASE_DIR / ".env")

required = [
    "OPENAI_API_KEY",
    "LANGCHAIN_API_KEY",
    "LANGCHAIN_TRACING_V2",
    "LANGCHAIN_PROJECT",
]

for key in required:
    if not os.getenv(key):
        raise ValueError(f"Missing environment variable: {key}")