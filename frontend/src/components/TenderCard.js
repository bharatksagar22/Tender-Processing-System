const TenderCard = ({ tender }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{tender.title}</h2>
      <p>{tender.description}</p>
      <p className="text-gray-500">Deadline: {tender.deadline}</p>
    </div>
  );
};

export default TenderCard;
