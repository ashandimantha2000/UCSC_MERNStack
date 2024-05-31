// Without

// import React, { useState } from 'react';
// import ChildComponentWithoutCallback from './ChildComponent'; // Import ChildComponentWithoutCallback

// export default function WithoutUseCallbackExample() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log('Button clicked without useCallback');
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       <h1>Without UseCallback Example</h1>
//       <p>Count: {count}</p>
//       <ChildComponentWithoutCallback onClick={handleClick} />
//     </div>
//   );
// }

import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent'; // Import ChildComponent

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>UseCallback Example</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}



