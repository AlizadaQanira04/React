import React, { useState } from "react";

function Input({ count, setCount }) {
  const [input, setInput] = useState(0);
  return (
    <div>
      <input
        type="number"
        placeholder="hi"
        onChange={(e) => setInput(e.target.valueAsNumber)}
      />
      <button onClick={() => setCount(count + input)}>Inc by Value</button>
    </div>
  );
}

export default Input;
