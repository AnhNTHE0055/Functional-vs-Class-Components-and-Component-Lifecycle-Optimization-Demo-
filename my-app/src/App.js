import React, { useState } from "react";
// import HeavyComponent from "./components/HeavyComponent";
import HeavyComponent from "./components/HeavyComponentMemo"; // Dùng cái này để thấy tối ưu

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>React Performance Demo</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <input
        style={{ width: "250px " }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Typing here shouldn't rerender component"
      />
      <HeavyComponent count={count} />
    </div>
  );
}
