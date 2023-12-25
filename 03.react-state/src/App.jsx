import React, { useState } from "react";
import Decrement from "./companents/decrement";
import Increment from "./companents/increment";

import Input from "./companents/increment-by-input-value";
function App() {
  const[count,setCount]=useState(0);


  return (
    <div>
      <h1 >Counter Example</h1>
      <Increment count={count} setCount={setCount}/>
      <h1>{count}</h1>
      <Decrement count={count} setCount={setCount}/>
      <hr />
      <Input count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
