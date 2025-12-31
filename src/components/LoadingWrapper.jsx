"use client";
import React, { useState, useEffect } from "react";
import Loader from "./common/Loader";
import { useLoading } from "../context/LoadingContext";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { setIsFinished } = useLoading();

  useEffect(() => {
    const handleLoad = () => {
      // Allow the drawing animation to finish (approx 3s)
      setTimeout(() => {
        setIsExiting(true);
        // Signal that the animation is starting/finishing
        // We can set isFinished either here (start of exit) or after (end of exit)
        // User said "when i go on that page", usually meaning after the loader

        // Wait for the slide-up transition (1000ms in Loader.jsx)
        setTimeout(() => {
          setIsLoading(false);
          setIsFinished(true); // Signal Navbar to start
          document.body.style.overflow = "unset";
        }, 1000);
      }, 3500);
    };

    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const timeout = setTimeout(handleLoad, 5000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, [setIsFinished]);

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}
      <main className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </main>
    </>
  );
}
