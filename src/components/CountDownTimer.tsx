"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    // November 31st of current year (Note: November has 30 days, so this will be December 1st)
    const targetDate = new Date(new Date().getFullYear(), 10, 31, 23, 59, 59);
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 w-full max-w-4xl mx-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          🎄 Christmas Countdown! 🎅
        </h1>
        <h1 className="text-emerald-500 md:text-3xl font-bold text-center mb-6">
          Keep an eye out! We&apos;re cooking something special 🎉
        </h1>

        <div className="flex flex-row justify-center items-center gap-1 md:gap-3">
          <div className="text-center flex-1 min-w-[60px] max-w-[75px]">
            <div className="bg-white/20 rounded-lg p-2 md:p-3">
              <div className="text-xl md:text-3xl font-bold text-white">
                {timeLeft.days}
              </div>
              <div className="text-xs text-white/80 mt-1">Days</div>
            </div>
          </div>

          <div className="text-center flex-1 min-w-[60px] max-w-[75px]">
            <div className="bg-white/20 rounded-lg p-2 md:p-3">
              <div className="text-xl md:text-3xl font-bold text-white">
                {timeLeft.hours}
              </div>
              <div className="text-xs text-white/80 mt-1">Hours</div>
            </div>
          </div>

          <div className="text-center flex-1 min-w-[60px] max-w-[75px]">
            <div className="bg-white/20 rounded-lg p-2 md:p-3">
              <div className="text-xl md:text-3xl font-bold text-white">
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-white/80 mt-1">Minutes</div>
            </div>
          </div>

          <div className="text-center flex-1 min-w-[60px] max-w-[75px]">
            <div className="bg-white/20 rounded-lg p-2 md:p-3">
              <div className="text-xl md:text-3xl font-bold text-white">
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-white/80 mt-1">Seconds</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/90 text-base md:text-lg">
            Until Christmas Month! 🎁
          </p>
          <p className="text-white/70 text-xs mt-1">
            {new Date(new Date().getFullYear(), 10, 31).toLocaleDateString(
              "en-US",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
