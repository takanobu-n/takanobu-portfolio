import { IconType } from 'react-icons';

const IconCard = ({ icon: Icon, label }: { icon: IconType; label: string }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
      <Icon className="text-4xl mb-2" />
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
};

export default IconCard;
