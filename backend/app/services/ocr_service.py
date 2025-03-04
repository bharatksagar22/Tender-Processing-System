import pytesseract
from PIL import Image
from io import BytesIO

def process_ocr(image_bytes: bytes) -> str:
    image = Image.open(BytesIO(image_bytes))
    text = pytesseract.image_to_string(image)
    return text
