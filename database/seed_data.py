import psycopg2

conn = psycopg2.connect(
    dbname="tender_db",
    user="admin",
    password="password",
    host="localhost"
)
cur = conn.cursor()

# Insert Sample Users
cur.execute("INSERT INTO users (username, email, password_hash) VALUES ('testuser', 'test@example.com', 'hashedpassword');")

# Insert Sample Tenders
cur.execute("INSERT INTO tenders (user_id, tender_name, description) VALUES (1, 'Road Construction', 'Construction of highway');")

# Insert Sample Document
cur.execute("INSERT INTO documents (tender_id, file_path, ocr_text) VALUES (1, '/uploads/doc1.pdf', 'Extracted OCR Text');")

conn.commit()
cur.close()
conn.close()

print("✅ Sample Data Inserted Successfully!")
