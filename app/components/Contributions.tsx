// contributions.tsx
'use client';

import { useState, useEffect } from "react";
import { useContributions } from "@/app/hooks/useContributes";

export const Contributions = () => {
  const [myContributes, setMyContributes] = useState<number[][]>([]); // 週ごとの配列
  const { getContributions } = useContributions();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const data = await getContributions("takanobu-n");
      if (isMounted) {
        setMyContributes(data.values);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const createOpacity = (count: number) =>
    count === 0 ? "0" : count <= 2 ? "0.2" : count <= 6 ? "0.4" : count <= 10 ? "0.6" : count <= 13 ? "0.8" : "1";

  return (
    <div className="grid gap-1">
      {myContributes.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-1">
          {week.map((count, dayIndex) => (
            <div
              key={dayIndex}
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
      ))}
    </div>
  );
};
