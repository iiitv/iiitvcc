"use client"
import { useState } from "react";
import axios from "axios";
import { LoggingOut } from '@/components/ui/loggingout';

function Logout() {
  const [loggingOut, setLoggingOut] = useState(false);
  const logout = async () => {
    setLoggingOut(true);
    axios.get("/api/logout").then((res) => {
      window.location.href = "/home";
    });
  };

  if (loggingOut) {
    return <LoggingOut />;
  }

  return (
    <button
      onClick={logout}
      className="w-full bg-destructive text-destructive-foreground font-semibold py-2 rounded-lg shadow hover:bg-destructive-hover transition-colors">Logout</button>
  )
}

export default Logout