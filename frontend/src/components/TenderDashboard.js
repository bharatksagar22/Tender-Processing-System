import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://tender-processing-system.onrender.com"; // Backend API

const TenderDashboard = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTenders();
  }, []);

  const fetchTenders = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tenders`);
      setTenders(response.data);
    } catch (error) {
      console.error("Error fetching tenders:", error);
      setError("Failed to load tenders");
    } finally {
      setLoading(false);
    }
  };

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
                  <button
                    className="view-btn"
                    onClick={() => alert(`Viewing ${tender.title}`)}
                  >
                    View
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => alert(`Editing ${tender.title}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TenderDashboard;
