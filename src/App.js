import React from "react";
import "./style.css";
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default function App() {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
