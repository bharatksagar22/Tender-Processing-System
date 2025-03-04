import { useEffect, useState } from "react";
import axios from "../services/api";

const Status = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get("/status").then((res) => setStatus(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Tender Status</h1>
      {status.map((s) => (
        <p key={s.id}>{s.title} - {s.status}</p>
      ))}
    </div>
  );
};

export default Status;
