import { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiatės?");

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Nieko tokio, viskas bus gerai")}>
        Jaučiuosi prastai
      </button>
      <button onClick={() => setMessage("Nujaučiu, kad greitai bus ok")}>
        Jaučiuosi normaliai
      </button>
      <button onClick={() => setMessage("Smagu girdėt, taip ir toliau")}>
        Jaučiuosi puikiai
      </button>
    </div>
  );
};

export default MoodChecker;
