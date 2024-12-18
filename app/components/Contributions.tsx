'use client';

import { useState, useEffect } from "react";
import { useContributions } from "@/app/hooks/useContributes";

export const Contributions = () => {
  const [myContributes, setMyContributes] = useState<any[]>([]);  // Adjust type according to your GraphQL response structure
  const { getContributions } = useContributions();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const now = new Date();
      const sixMonthBefore = new Date();
      sixMonthBefore.setMonth(now.getMonth() - 6);

      const data = await getContributions("takanobu-n", now.toISOString(), sixMonthBefore.toISOString());
      if (isMounted) {
        setMyContributes(data.values);  // Assuming the returned data structure is suitable
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const createOpacity = (count: number) =>
    count === 0 ? "0" : count <= 2 ? "0.2" : count <= 6 ? "0.4" : count <= 10 ? "0.6" : count <= 13 ? "0.8" : "1";

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Function to get the day of the week from a date string (0 = Sunday, 1 = Monday, ...)
  const getStartDayOfMonth = (date: string) => {
    const d = new Date(date);
    return d.getDay();  // Sunday = 0, Monday = 1, ...
  };

  // Function to map the contribution data to the calendar grid
  const mapContributionsToCalendar = () => {
    return myContributes.map((week) => {
      const weekDays = new Array(7).fill(0); // Create a week array with 7 days
      week.forEach((day) => {
        const date = new Date(day.date);
        const dayOfWeek = getStartDayOfMonth(day.date);  // Get the correct day of the week
        const contributionCount = day.contributionCount;

        // Place the contribution count in the correct spot based on the weekday
        weekDays[dayOfWeek] = contributionCount;
      });

      return weekDays;
    });
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center tracking-tight text-white">
        CONTRIBUTIONS
      </h1>

      {/* Month Labels */}
      <div className="grid grid-cols-12 gap-1 mb-2">
        {months.map((month, index) => (
          <div key={index} className="text-center text-white text-sm col-span-1">{month}</div>
        ))}
      </div>

      <div className="flex">
        {/* Week Days on the Left */}
        <div className="flex flex-col justify-between mr-2">
          {days.map((day, index) => (
            <div key={index} className="text-white text-sm">{day}</div>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-52 gap-1">
          {mapContributionsToCalendar().map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((count, dayIndex) => (
                <div
                  key={dayIndex}
                  className="w-4 h-4 rounded-sm bg-green-500"
                  style={{
                    opacity: createOpacity(count),
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
