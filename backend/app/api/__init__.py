from fastapi import APIRouter
from routes import tender, user, document

router = APIRouter()

router.include_router(tender.router)
router.include_router(user.router)
router.include_router(document.router)
