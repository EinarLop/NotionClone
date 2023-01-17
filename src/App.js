import { useState, createElement, useEffect } from "react";

function App() {
  let tagCounter = 1;

  const [test, setTest] = useState([
    {
      tag: "input",
      props: {
        className: "bg-blue-100",
        onChange: (events) => handleOnChange(events),
        id: 0,
      },
    },
  ]);

  const handleOnChange = async (event) => {
    if (event.target.value.includes("/p")) {
      const elementToAdd = {
        tag: "input",
        props: {
          className: "bg-blue-100",
          onChange: (events) => handleOnChange(events),
          id: tagCounter,
        },
      };

      setTest((test) => [...test, elementToAdd]);

      event.target.value = event.target.value.replace("/p", "");
      tagCounter++;
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
