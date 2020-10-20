import React, { useState } from "react";

export default function useInput({ type }) {
  const [value, setvalue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setvalue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
}
