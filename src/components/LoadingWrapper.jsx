"use client";
import React, { useState, useEffect } from "react";
import Loader from "./common/Loader";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Allow the drawing animation to finish (approx 3s)
      setTimeout(() => {
        setIsExiting(true);
        // Wait for the slide-up transition (1000ms in Loader.jsx)
        setTimeout(() => {
          setIsLoading(false);
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
  }, []);

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}
      <main className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </main>
    </>
  );
}
