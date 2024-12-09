const IconCard = ({ icon, label }: { icon: string; label: string }) => {
    return (
      <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="text-4xl mb-2">{icon}</div>
        <p>{label}</p>
      </div>
    );
  };
  
  export default IconCard;
  