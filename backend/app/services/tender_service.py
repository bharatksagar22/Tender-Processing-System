from models.tender_model import Tender

def check_tender_eligibility(tender: Tender, user_profile: dict):
    return {"eligible": True if "AI" in tender.description else False}
