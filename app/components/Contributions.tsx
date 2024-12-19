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
    count === 0 ? "0" : count <= 2 ? "0.2" : count <= 6 ? "0.4" : count <= 10 ? "0.6" : count <= 13 ? "0.8" : "1";

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

      {/* 凡例の表示 */}
      <div className="absolute bottom-4 right-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 opacity-0.2" />
          <span>0 - 2</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 opacity-0.4" />
          <span>3 - 6</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 opacity-0.6" />
          <span>7 - 10</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 opacity-0.8" />
          <span>11 - 13</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 opacity-1" />
          <span>14+</span>
        </div>
      </div>
    </section>
  );
};
