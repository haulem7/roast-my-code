from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow our React frontend to communicate with Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "🔥 RoastMyCode backend is alive!"
    }


@app.post("/roast")
def roast_code(data: dict):
    code = data.get("code")
    language = data.get("language")

    return {
        "roast": "Bro... what did I just look at? 💀",
        "explanation": f"I received your {language} code.",
        "improved_code": code
    }