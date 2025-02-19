import { useEffect } from "react";
import "./App.css";

import viteLogo from "/vite.svg";
import { sortOdd } from "./tasks/sortOdd";

function App() {
  useEffect(() => {
    console.log(sortOdd([2, 9, 5, 7, 4, 3, 8, 1, 2, 4]));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
