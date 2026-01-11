import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";

const items = ["New York", "Los Angeles", "San Francisco"];

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <ListGroup
      items={items}
      heading="Miami"
      onSelectItem={() => console.log(items)}
    />
  );
}

export default App;
