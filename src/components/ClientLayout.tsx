"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count++;

      setProgress(count);

      if (count >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return <>{children}</>;
}
