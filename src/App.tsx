import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./Like";

function App() {
  return <Like onClick={() => console.log("clicked!")} />;
}

export default App;
