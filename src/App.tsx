import { useEffect } from "react";
import "./App.css";

// import { sortingOddWithoutEven } from "./tasks/sortingOddWithoutEven.ts";
// import findUnique from "./tasks/findUnique";
import { debounce } from "./utils";

function App() {
  useEffect(() => {
    // const arr = [2, 9, 5, 7, 4, 3, 8, 1, 2, 4];
    //
    // console.log("RES", sortingOddWithoutEven(arr));
    // console.log("EX", [2, 1, 3, 5, 4, 7, 8, 9, 2, 4]);
    const deb = debounce(() => {
      console.log("asas");
    }, 1000);

    deb();
    // const res = findUnique([10, 5, 10, 0, 6, 6, 7, 2, 9, 9]);
    //
    // console.log("RES", res);
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
