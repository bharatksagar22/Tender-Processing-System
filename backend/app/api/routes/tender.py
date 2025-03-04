from fastapi import APIRouter, HTTPException, Depends
from models import Tender
from database import get_db
from sqlalchemy.orm import Session

router = APIRouter(prefix="/tender", tags=["Tender"])

@router.post("/upload")
def upload_tender(tender: Tender, db: Session = Depends(get_db)):
    db.add(tender)
    db.commit()
    db.refresh(tender)
    return {"message": "Tender uploaded successfully", "tender": tender}

@router.get("/{tender_id}")
def get_tender(tender_id: int, db: Session = Depends(get_db)):
    tender = db.query(Tender).filter(Tender.id == tender_id).first()
    if not tender:
        raise HTTPException(status_code=404, detail="Tender not found")
    return tender

@router.get("/")
def list_tenders(db: Session = Depends(get_db)):
    tenders = db.query(Tender).all()
    return tenders
