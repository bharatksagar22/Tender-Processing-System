from fastapi import APIRouter, HTTPException, Depends
from models import User
from database import get_db
from sqlalchemy.orm import Session
from security import get_password_hash, verify_password, create_access_token

router = APIRouter(prefix="/user", tags=["User"])

@router.post("/register")
def register_user(user: User, db: Session = Depends(get_db)):
    user.password = get_password_hash(user.password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"message": "User registered successfully"}

@router.post("/login")
def login_user(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    access_token = create_access_token({"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}
