import React, { useState, useEffect } from "react";
import axios from "axios";

const HelloWorld = () => {
  const [helloWorld, setHelloWorld] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/helloWorld")
      .then((response) => {
        // handle success
        setHelloWorld(JSON.stringify(response.data));
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return <div>{helloWorld}</div>;
};

export default HelloWorld;
