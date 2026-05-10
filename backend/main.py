# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Model
class AddressRequest(BaseModel):
    address: str
    language: str
    priority: str

# Home Route
@app.get("/")
def home():
    return {
        "message": "GemmaRoute Backend Running"
    }

# Simplify Route
@app.post("/simplify")
async def simplify(req: AddressRequest):

    # Tamil Output
    if req.language == "ta":

        fake_ai_response = f"""
➡ கோவிலுக்கு நேராக செல்லவும்

➡ மஞ்சள் கேட் அருகே இடப்புறம் திரும்பவும்

➡ 2வது தெருவில் செல்லவும்

➡ இலக்கு வலது பக்கத்தில் இருக்கும்

📍 முகவரி:
{req.address}

🚚 டெலிவரி வகை:
{req.priority}
"""

    # English Output
    else:

        fake_ai_response = f"""
➡ Go straight near the temple

➡ Turn left at the yellow gate

➡ Enter 2nd street

➡ Destination will be on the right side

📍 Original Address:
{req.address}

🚚 Delivery Type:
{req.priority}
"""

    return {
        "result": fake_ai_response
    }