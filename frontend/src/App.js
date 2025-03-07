import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TenderDashboard from "./components/TenderDashboard";  ✅


const API_BASE_URL = "https://tender-processing-system.onrender.com"; // Backend API URL

const FileUpload = ({ title, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files to upload");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);
      onUpload(selectedFiles);
      setSelectedFiles([]);
    } catch (error) {
      console.error("File upload error:", error);
      alert("File upload failed!");
    }
  };

  return (
    <div className="file-upload-container">
      <h3>{title}</h3>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

const TenderDashboard = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/tenders`)
      .then((response) => {
        setTenders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tenders:", error);
        setError("Failed to load tenders");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="dashboard-title">Tender Dashboard</h2>
      {loading ? (
        <p className="loading">Loading tenders...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : tenders.length === 0 ? (
        <p className="no-tenders">No tenders available.</p>
      ) : (
        <table className="tender-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenders.map((tender) => (
              <tr key={tender.id}>
                <td>{tender.id}</td>
                <td>{tender.title}</td>
                <td>
                  <span className={`status ${tender.status.toLowerCase()}`}>
                    {tender.status}
                  </span>
                </td>
                <td>{new Date(tender.due_date).toLocaleDateString()}</td>
                <td>
                  <button className="view-btn" onClick={() => alert(`Viewing ${tender.title}`)}>View</button>
                  <button className="edit-btn" onClick={() => alert(`Editing ${tender.title}`)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

function App() {
  const handleUpload = (files) => {
    console.log("Uploaded files:", files);
    alert("Files uploaded successfully!");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to Tender Processing System</h1>
      <FileUpload title="Upload Company Information (PDF/Word)" onUpload={handleUpload} />
      <FileUpload title="Upload Tender Document (PDF/Word)" onUpload={handleUpload} />
      <TenderDashboard />
    </div>
  );
}

export default App;
