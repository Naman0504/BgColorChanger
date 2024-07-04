import { useState } from "react";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-center text-2xl ">
          Click the button to change the background color
        </h1>
        <div className="fixed flex flex-wrap justify-center left-5 top-5 px-3">
          <div className="flex flex-wrap flex-col justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "brown" }}
              onClick={() => {
                setcolor("brown");
              }}
            >
              brown
            </button>
            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setcolor("red");
              }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "purple" }}
              onClick={() => {
                setcolor("purple");
              }}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setcolor("green");
              }}
            >
              Green
            </button>

            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setcolor("blue");
              }}
            >
              blue
            </button>

            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "pink", color: "black" }}
              onClick={() => {
                setcolor("pink");
              }}
            >
              Pink
            </button>

            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                setcolor("orange");
              }}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => {
                setcolor("black");
              }}
              onDoubleClick={() => {
                setcolor("yellow");
              }}
            >
              black
            </button>
            <button
              className="outline-none px-4 p-1 rounded-full shadow-md text-white"
              style={{ backgroundColor: "yellow", color: "black" }}
              onClick={() => {
                setcolor("yellow");
              }}
            >
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
