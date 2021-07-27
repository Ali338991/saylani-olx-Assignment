import React, { useState } from "react";

export default function Login() {
  const [Smallest, setSmallest] = useState(0);
  const arr = [1, 3, 5, 4, 6, 2, 9];
  const ctaHandler = () => {
    var next, i, j;
    for (i = 0; i < arr.length; i++) {
      next = -1;
      for (j = i + 1; j <arr.length; j++) {
        if (arr[i] > arr[j]) {
          next = arr[j];
          break;
        }
      }
      setSmallest(arr[i]);
      // document.write( arr[i] + " -- "
      // 	+ next+"<br>" );
    }
  };

  return (
    <div>
      <div>{arr}</div>
      <button onClick={() => ctaHandler()}>Find Next Smallest Number</button>
    </div>
  );
}
