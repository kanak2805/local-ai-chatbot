from src.chains.chatbot_chain import get_chain

def run_chatbot():

    chain = get_chain()

    print("AI Chatbot Started")
    print("Type 'exit' to quit\n")

    while True:

        user_input = input("You: ")

        if user_input.lower() == "exit":
            break

        response = chain.invoke(
            {
                "question": user_input
            }
        )

        print(f"\nAI: {response.content}\n")

if __name__ == "__main__":
    run_chatbot()