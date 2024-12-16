'use client'

import { useState, useEffect } from "react";
import { useContributions } from "@/app/hooks/useContributes";

export const Contributions = () => {
  const [myContributes, setMyContributes] = useState<number[]>([]);
  const { getContributions } = useContributions();

  useEffect(() => {
    (async () => {
      const data = await getContributions("takanobu-n");
      setMyContributes(data.values);
    })();
  }, []);

  const createOpacity = (count: number) =>
    count === 0 ? "0" : count <= 2 ? "0.2" : count <= 6 ? "0.4" : count <= 10 ? "0.6" : count <= 13 ? "0.8" : "1";

  return (
    <div className="grid grid-cols-27 gap-1">
      {myContributes.map((count, index) => (
        <div
          key={index}
          style={{
            width: "16px",
            height: "16px",
            backgroundColor: "#39D353",
            borderRadius: "4px",
            opacity: createOpacity(count),
          }}
        />
      ))}
    </div>
  );
};
