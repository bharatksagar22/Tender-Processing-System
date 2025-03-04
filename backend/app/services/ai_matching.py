import spacy

nlp = spacy.load("en_core_web_sm")

def analyze_document(text: str):
    doc = nlp(text)
    return {"entities": [(ent.text, ent.label_) for ent in doc.ents]}
