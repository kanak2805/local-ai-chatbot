# Deploying to Render

This app is a Flask web service. Two ways to deploy — Blueprint (uses `render.yaml`, recommended) or manual.

## Prerequisites
1. Push this folder to a GitHub repo (the `.env` file is intentionally NOT included — never commit it).
2. **Rotate your keys first.** The OpenRouter and LangSmith keys that were in the old `.env` are compromised (they were shared). Generate new ones.

## Option A — Blueprint (recommended)
1. Go to https://dashboard.render.com → **New** → **Blueprint**.
2. Connect the GitHub repo. Render reads `render.yaml` automatically.
3. When prompted, fill in the two secret env vars:
   - `OPENAI_API_KEY`  → your (new) OpenRouter key
   - `LANGCHAIN_API_KEY` → your (new) LangSmith key
   (`LANGCHAIN_TRACING_V2`, `LANGCHAIN_PROJECT`, `PYTHON_VERSION` are preset.)
4. Click **Apply**. First build takes a few minutes.
5. Your URL will be `https://local-ai-chatbot-XXXX.onrender.com`.

## Option B — Manual Web Service
1. **New** → **Web Service** → connect the repo.
2. Settings:
   - Runtime: **Python**
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn src.app:app --bind 0.0.0.0:$PORT`
3. Add the same 4 environment variables under **Environment**.
4. Create. Done.

## Notes
- Free plan spins down after ~15 min idle; first request after that is slow (cold start). Fine for a demo.
- If a pinned package in `requirements.txt` fails to build, loosen that pin or set `PYTHON_VERSION` to match what you built with locally (you were on 3.9).
- To disable LangSmith tracing entirely, set `LANGCHAIN_TRACING_V2=false`.
