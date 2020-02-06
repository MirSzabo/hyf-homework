import React, { useState, useEffect } from "react";

function Counter() {
  console.log("called")
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);    
    return (() => {
        clearTimeout(timer)
        }); 
});

  if (count === 1) {
    return (
      <div>
        <p>You have used {count} second on this website</p>
      </div>
    );
  }

  return (
    <div>
      <p>You have used {count} seconds on this website</p>
    </div>
  );
}

export default Counter;
