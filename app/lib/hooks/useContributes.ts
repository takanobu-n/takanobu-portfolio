import { MyContributes } from "@/app/lib/hooks/useContributes";

export const useContributions = () => {
  const getContributions = async (userName: string): Promise<MyContributes> => {
    const response = await fetch(`/api/contributions/${userName}`);
    return await response.json();
  };

  return { getContributions };
};
