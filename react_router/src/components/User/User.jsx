import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const { userId } = useParams();
  return (
    <div className="text-2xl bg-amber-500 text-black">User: ${userId}</div>
  );
};
