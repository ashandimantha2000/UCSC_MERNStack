import React, { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffect() {
  const [width, setWidth] = useState(100); // Width in pixels
  const [height, setHeight] = useState(100);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const currentWidth = boxRef.current.offsetWidth;
      if (currentWidth > 500) {
        setWidth(500);
      }
    }
    if (boxRef.current) {
      const currentHeight = boxRef.current.offsetHeight;
      if (currentHeight > 500) {
        setHeight(500);
      }
    }
  }, [width, height]);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      
      <button onClick={() => setWidth(width + 100)}>Increase Width</button>
      <button onClick={() => setWidth(width - 100)}>Decrease Width</button>
      <br />
      <button onClick={() => setHeight(height + 100)}>Increase Height</button>
      <button onClick={() => setHeight(height - 100)}>Decrease Height</button>
      <br />
      <div
        ref={boxRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: "lightblue",
          padding: "10px",
        }}
      >
        Resize me if width greater than 500!
      </div>
    </div>
  );
}
