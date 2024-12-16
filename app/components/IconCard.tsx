const IconCard = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
};

export default IconCard;
