from flask import Blueprint, render_template, request, jsonify

from src.chains.chatbot_chain import get_chain

chatbot_routes = Blueprint("chatbot", __name__)

chain = get_chain()


@chatbot_routes.route("/")
def home():
    return render_template("index.html")


@chatbot_routes.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    question = data.get("message")

    response = chain.invoke(
        {
            "question": question
        }
    )

    return jsonify(
        {
            "response": response.content
        }
    )