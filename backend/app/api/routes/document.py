from fastapi import APIRouter, UploadFile, File, HTTPException
from services.ocr import process_ocr
from services.ai import analyze_document

router = APIRouter(prefix="/document", tags=["Document"])

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    content = await file.read()
    text = process_ocr(content)
    analysis = analyze_document(text)
    return {"text": text, "analysis": analysis}

@router.get("/status/{doc_id}")
def get_document_status(doc_id: str):
    # Placeholder for document processing status check
    return {"doc_id": doc_id, "status": "Processing"}
