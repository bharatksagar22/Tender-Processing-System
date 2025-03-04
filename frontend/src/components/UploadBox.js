import { useState } from "react";
import axios from "../services/api";

const UploadBox = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("/upload", formData);
    alert("File uploaded successfully!");
  };

  return (
    <div className="p-4 border rounded">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="bg-blue-600 text-white px-4 py-2 mt-2" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default UploadBox;
