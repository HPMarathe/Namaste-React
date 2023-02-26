import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("MAMASTE REACT ");
    }, 1000);
    console.log("useeffect");

    return () => {
      clearInterval(timer);
      console.log("Useeffect return");
    };
  }, []);

  console.log("render");

  return (
    <div>
      <h2>Profile functional component</h2>
      <h3>Name:{props.name}</h3>
      <h3>Count:{count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
