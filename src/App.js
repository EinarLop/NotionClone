import { useState, createElement, useEffect } from "react";

function App() {
  let tagCounter = 2;
  let sequence = "";
  // p, main title, h1, h2, h3
  let tags = [
    {
      tag: "input",
      props: {
        placeholder: "Begin typing here...",
        className: "bg-blue-100 w-full focus:outline-none",
        onKeyDown: (event) => handleKeyDown(event),
        id: 1,
      },
    },
    {
      tag: "input",
      props: {
        placeholder: "Page Title",
        className: "bg-blue-100 text-5xl w-full focus:outline-none",
        id: 0,
      },
    },
    {
      tag: "input",
      props: {
        placeholder: "Page Title",
        className: "bg-blue-100 text-3xl w-full focus:outline-none",
        id: 0,
      },
    },
    {
      tag: "input",
      props: {
        placeholder: "Page Title",
        className: "bg-blue-100 text-2xl w-full focus:outline-none",
        id: 0,
      },
    },
    {
      tag: "input",
      props: {
        placeholder: "Page Title",
        className: "bg-blue-100 text-xl w-full focus:outline-none",
        id: 0,
      },
    },
  ];

  const [test, setTest] = useState([tags[1], tags[0]]);

  const handleKeyDown = (event) => {
    console.log(sequence);

    if (event.key === "Backspace") {
      console.log("sssssssssss", event.target.value[1]);
      if (
        event.target.value[event.target.value.length - 1] === "p" ||
        event.target.value[event.target.value.length - 1] === "/" ||
        event.target.value[event.target.value.length - 1] === "h" ||
        event.target.value[event.target.value.length - 1] === "1" ||
        event.target.value[event.target.value.length - 1] === "2"
      ) {
        console.log("sss");
        sequence = sequence.substring(0, sequence.length - 1);
      }
    }
    if (
      event.key === "p" ||
      event.key === "/" ||
      event.key === "h" ||
      event.key === "1" ||
      event.key === "2" ||
      event.key === "3"
    ) {
      sequence += event.key;
    } else if (event.key !== "Enter") {
      sequence = "";
    }
    if (sequence === "/p" && event.key === "Enter") {
      setTest((test) => [...test, tags[0]]);
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length - 2
      );
      sequence = "";
      console.log("inside");
    } else if (sequence === "/h1" && event.key === "Enter") {
      setTest((test) => [...test, tags[2]]);
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length - 2
      );
      sequence = "";
    } else if (sequence === "/h2" && event.key === "Enter") {
      setTest((test) => [...test, tags[3]]);
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length - 2
      );
      sequence = "";
    } else if (sequence === "/h3" && event.key === "Enter") {
      setTest((test) => [...test, tags[4]]);
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length - 2
      );
      sequence = "";
    }
  };

  return (
    <div>
      {test.map((element) => {
        return createElement(
          element.tag,
          { ...element.props },
          element.content
        );
      })}
      <button onClick={() => console.log(test.map((e) => e.props.id))}>
        nkn
      </button>
    </div>
  );
}

export default App;
