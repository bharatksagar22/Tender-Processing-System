from fastapi import FastAPI
from routes import user, tender, document
from database import engine, Base

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(user.router)
app.include_router(tender.router)
app.include_router(document.router)

@app.get("/")
def home():
    return {"message": "Welcome to the Tender Processing API"}
