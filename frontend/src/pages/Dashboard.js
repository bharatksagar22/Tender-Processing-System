import { useEffect, useState } from "react";
import axios from "../services/api";
import TenderCard from "../components/TenderCard";

const Dashboard = () => {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    axios.get("/tenders").then((res) => setTenders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Tenders</h1>
      {tenders.map((tender) => (
        <TenderCard key={tender.id} tender={tender} />
      ))}
    </div>
  );
};

export default Dashboard;
