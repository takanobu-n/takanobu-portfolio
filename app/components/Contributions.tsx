'use client';

import { useState, useEffect } from "react";
import { useContributions } from "@/app/hooks/useContributes";

export const Contributions = () => {
  const [myContributes, setMyContributes] = useState<number[][]>([]);
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
    count === 0 ? "0.1" : count <= 2 ? "0.2" : count <= 6 ? "0.4" : count <= 10 ? "0.6" : count <= 13 ? "0.8" : "1";

  // 貢献数の合計を計算
  const totalContributions = myContributes.flat().reduce((sum, count) => sum + count, 0);

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center tracking-tight">
        CONTRIBUTIONS
      </h1>

      {/* 貢献数の表示 */}
      <div className="mb-4 text-xl text-left">
        <span className="font-bold">Total Contributions: </span>{totalContributions}
      </div>

      <div className="grid grid-flow-col auto-cols-max gap-2 justify-center border-2 border-gray-500 p-2 w-full">
        {myContributes.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((count, dayIndex) => (
              <div
                key={dayIndex}
                className="w-4 h-4 bg-green-500 rounded-sm"
                style={{
                  opacity: createOpacity(count),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
