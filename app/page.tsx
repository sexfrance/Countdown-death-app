"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Component from "@/components/eula";
import { useRouter } from "next/navigation";

const generateRandomTime = () => {
  return {
    years: Math.floor(Math.random() * 99) + 1,
    days: Math.floor(Math.random() * 364) + 1,
    hours: Math.floor(Math.random() * 23) + 1,
    minutes: Math.floor(Math.random() * 59) + 1,
    seconds: Math.floor(Math.random() * 59) + 1,
  };
};

const getStoredTime = () => {
  if (typeof window !== "undefined") {
    const storedTime = localStorage.getItem("countdown_time");
    return storedTime ? JSON.parse(storedTime) : null;
  }
  return null;
};

const setStoredTime = (time: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("countdown_time", JSON.stringify(time));
  }
};

const calculateTimeWithElapsed = (storedTime: any, elapsedSeconds: any) => {
  let newTime = { ...storedTime.time };

  newTime.seconds -= elapsedSeconds % 60;
  newTime.minutes -= Math.floor(elapsedSeconds / 60) % 60;
  newTime.hours -= Math.floor(elapsedSeconds / 3600) % 24;
  newTime.days -= Math.floor(elapsedSeconds / 86400) % 365;
  newTime.years -= Math.floor(elapsedSeconds / 31536000);

  if (newTime.seconds <= 0) {
    newTime.seconds += 60;
    newTime.minutes -= 1;
  }
  if (newTime.minutes < 0) {
    newTime.minutes += 60;
    newTime.hours -= 1;
  }
  if (newTime.hours < 0) {
    newTime.hours += 24;
    newTime.days -= 1;
  }
  if (newTime.days < 0) {
    newTime.days += 365;
    newTime.years -= 1;
  }
  if (newTime.years < 0) {
    newTime.years = 0;
    newTime.days = 0;
    newTime.hours = 0;
    newTime.minutes = 0;
    newTime.seconds = 0;
  }

  return newTime;
};

const showLogoOncePerDay = () => {
  if (typeof window !== "undefined") {
    const lastLogoDate = localStorage.getItem("logoLastShown");
    const today = new Date().toISOString().split("T")[0];

    if (lastLogoDate === today) {
      return false;
    } else {
      localStorage.setItem("logoLastShown", today);
      return true;
    }
  }
  return false;
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [showToS, setShowToS] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tosAccepted = localStorage.getItem("tosAccepted");
      if (!tosAccepted) {
        setShowToS(true);
      } else {
        const shouldShowLogo = showLogoOncePerDay();
        setShowLogo(shouldShowLogo);
        setIsLoading(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      const audio = new Audio("/static/scream.mp3");
      audio.play();

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && !showToS) {
      let storedTime = getStoredTime();
      if (!storedTime) {
        const newTime = generateRandomTime();
        storedTime = {
          time: newTime,
          lastVisit: new Date().toISOString(),
        };
        setStoredTime(storedTime);
      } else {
        const now = new Date().getTime();
        const lastVisit = new Date(storedTime.lastVisit).getTime();
        const elapsedSeconds = Math.floor((now - lastVisit) / 1000);

        const newTime = calculateTimeWithElapsed(storedTime, elapsedSeconds);
        storedTime = {
          time: newTime,
          lastVisit: new Date().toISOString(),
        };
        setStoredTime(storedTime);
      }
      setTimeLeft(storedTime.time);

      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          {/* @ts-ignore*/ }
          let newTime = { ...prevTime };

          if (newTime.seconds > 1) {
            newTime.seconds -= 1;
          } else {
            newTime.seconds = 60;
            if (newTime.minutes > 1) {
              newTime.minutes -= 1;
            } else {
              newTime.minutes = 60;
              if (newTime.hours > 1) {
                newTime.hours -= 1;
              } else {
                newTime.hours = 24;
                if (newTime.days > 1) {
                  newTime.days -= 1;
                } else {
                  newTime.days = 365;
                  if (newTime.years > 0) {
                    newTime.years -= 1;
                  } else {
                    clearInterval(timer);
                    setTimeout(() => setIsTimeOver(true), 5000);
                    return newTime;
                  }
                }
              }
            }
          }

          setStoredTime({
            time: newTime,
            lastVisit: new Date().toISOString(),
          });

          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isLoading, showToS]);

  const acceptToS = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tosAccepted", "true");
    }
    const shouldShowLogo = showLogoOncePerDay();
    setShowLogo(shouldShowLogo);
    setShowToS(false);
    setIsLoading(true);
  };

  const denyToS = () => {
    router.back();
  };

  const getColorClass = (value: any) => {
    return value === 0 ? "text-[#ba090f]" : "text-white";
  };

  if (!timeLeft && !isLoading && !showToS) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <AnimatePresence>
        {showToS ? (
          <motion.div
            key="tos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-6"
          >
            <Component onAccept={acceptToS} onDeny={denyToS} />
          </motion.div>
        ) : isLoading && showLogo ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center absolute"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <img
              src="/static/logo.jpg"
              alt="Logo"
              className="h-24 w-24 sm:h-32 sm:w-32 mb-4 animate-pulse"
            />
          </motion.div>
        ) : isTimeOver ? (
          <motion.div
            key="death"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img
              src="/static/death-icon.png"
              alt="Death Icon"
              className="h-40 w-40 sm:h-64 sm:w-64"
            />
          </motion.div>
        ) : (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[60px] sm:text-[140px] leading-none flex flex-col items-center"
          >
            {/* @ts-ignore*/}
            <div className={`${getColorClass(timeLeft.years)} relative mb-4`}>
              {/* @ts-ignore*/}
              {timeLeft.years}
              <span className="text-[20px] sm:text-[35px] absolute bottom-0 right-0 transform translate-x-full -translate-y-1/2">
                YRS
              </span>
            </div>
            {/* @ts-ignore */}
            <div className={`${getColorClass(timeLeft.days)} relative mb-4`}>
              {/* @ts-ignore */}
              {timeLeft.days}
              <span className="text-[20px] sm:text-[35px] absolute bottom-0 right-0 transform translate-x-full -translate-y-1/2">
                DAYS
              </span>
            </div>
            {/* @ts-ignore */}
            <div className={`${getColorClass(timeLeft.hours)} relative mb-4`}>
              {/* @ts-ignore */}
              {timeLeft.hours}
              <span className="text-[20px] sm:text-[35px] absolute bottom-0 right-0 transform translate-x-full -translate-y-1/2">
                HRS
              </span>
            </div>
            {/* @ts-ignore */}
            <div className={`${getColorClass(timeLeft.minutes)} relative mb-4`}>
              {/* @ts-ignore */}
              {timeLeft.minutes}
              <span className="text-[20px] sm:text-[35px] absolute bottom-0 right-0 transform translate-x-full -translate-y-1/2">
                MIN
              </span>
            </div>
            {/* @ts-ignore */}
            <div className={`${getColorClass(timeLeft.seconds)} relative`}>
              {/* @ts-ignore */}
              {timeLeft.seconds}
              <span className="text-[20px] sm:text-[35px] absolute bottom-0 right-0 transform translate-x-full -translate-y-1/2">
                SEC
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
