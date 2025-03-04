# 🏗 System Architecture – Tender Processing System

## 📌 Overview
The Tender Processing System automates and streamlines the tender application and evaluation process using **AI, OCR, and NLP technologies**. The system enables users to upload tender documents, extract relevant information, and determine eligibility automatically.

## 📌 Architecture Diagram

## 📌 Key Features
- **AI-Based Eligibility Check**: Uses OCR and NLP to extract text and determine eligibility.
- **User Authentication**: Secure login using JWT tokens.
- **Automated Tender Matching**: Smart recommendations based on previous bid history.
- **Document Management**: Stores and processes tender-related documents.

## 📌 Tech Stack
### 🔹 **Frontend**
- **Framework:** React (JavaScript)
- **Styling:** Tailwind CSS
- **State Management:** Context API / Redux
- **API Calls:** Axios

### 🔹 **Backend**
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL (Structured Data) + Elasticsearch (Full-Text Search)
- **Authentication:** JWT (JSON Web Tokens)
- **OCR & AI Processing:** spaCy, OpenAI API

### 🔹 **Infrastructure & Deployment**
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions & Jenkins
- **Reverse Proxy:** Nginx
- **Hosting:** AWS/GCP/Vercel for frontend, DigitalOcean for backend
- **Logging & Monitoring:** Prometheus + Grafana

## 📌 System Workflow
1. **User Registration/Login**  
   - Users sign up and log in using JWT-based authentication.

2. **Tender Document Upload**  
   - Users upload PDF/Word tender documents.
   - The document is stored and passed through an **OCR pipeline**.

3. **AI-Based Data Extraction**  
   - Extracted text is processed using **NLP models**.
   - AI analyzes eligibility based on predefined criteria.

4. **Tender Matching & Status Update**  
   - The system matches tenders with suitable vendors.
   - Users can track the processing status.

5. **Notification & Final Submission**  
   - Once processed, users receive results via email/SMS.
   - Finalized tenders are submitted to the appropriate portals.

## 📌 API Endpoints (High-Level)
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/register` | User Registration |
| `POST` | `/api/auth/login` | User Login |
| `POST` | `/api/tenders/upload` | Upload Tender Document |
| `GET` | `/api/tenders/status/{tender_id}` | Check Tender Status |
| `GET` | `/api/tenders/match` | Get Matching Tenders |

## 📌 Database Schema (Simplified)
### **User Table**
| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Unique User ID |
| `username` | String | User's Name |
| `email` | String | Unique Email |
| `password_hash` | String | Hashed Password |

### **Tender Table**
| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Unique Tender ID |
| `user_id` | UUID | User who uploaded the tender |
| `document_url` | String | Location of the uploaded document |
| `status` | Enum | Processing, Completed, Rejected |

## 📌 Deployment Strategy
1. **Local Development**  
   - Run FastAPI backend and React frontend locally using `docker-compose up --build`.

2. **Staging Environment**  
   - Deploy backend to a cloud VM using Docker.
   - Frontend hosted on Vercel/Netlify.

3. **Production Deployment**  
   - Use Nginx as a reverse proxy.
   - Automate deployments with CI/CD pipelines.

## 📌 Conclusion
This system **eliminates manual processing of tenders**, improves efficiency, and ensures fair evaluation using AI. 🚀
