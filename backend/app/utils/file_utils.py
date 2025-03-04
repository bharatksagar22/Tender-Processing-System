import os

def save_file(file_name: str, content: bytes):
    with open(os.path.join("uploads", file_name), "wb") as f:
        f.write(content)
