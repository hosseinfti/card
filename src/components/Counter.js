import { useState, useEffect, useLayoutEffect, useRef } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      console.log("useEffect", value);
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  useLayoutEffect(() => {
    if (value === 0) {
      console.log("useLayoutEffect", value);
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);

  return (
<>
<div onClick={() => setValue(0)}>value: {value}</div>
<input type="checkbox" />
</>
  )
}

export default Counter;









// import { useState, useEffect, useLayoutEffect, useRef } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(5);

//   const firstUpdate = useRef(true);

//   useEffect(() => {
//     if (firstUpdate.current) {
//       firstUpdate.current = false;
//       return;
//     }
//     console.log("useEffect render start");
//     console.log(count);
//     console.log("useEffect render finish");

//   },[count]);
//   useEffect(()=> {
//     console.log("component rendered");
//   },[])

//   return (
//     <div>
//       <h1> Counter </h1>
//       <div> {count} </div>
//       <button onClick={() => setCount(count + 1)}> click to increase </button>
//     </div>
//   );
// };

// export default Counter;
