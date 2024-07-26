import { useState } from "react";

function App() {
  const [ourText, setOurText] = useState("");
  const [paused, setPaused] = useState(true);

  const msg = new SpeechSynthesisUtterance();

  const handleText = () => {
    if (paused) {
      msg.text = ourText;
      window.speechSynthesis.speak(msg);
    } else {
      window.speechSynthesis.resume();
    }

    setPaused(false);
  };

  const handleClear = () => {
    setOurText("");
    const synth = window.speechSynthesis;
    synth.cancel();
    setPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setPaused(false);
  };

  return (
    <div className="flex flex-col  items-center gap-5 mt-20">
      <textarea
        value={ourText}
        onPaste={(e) => setOurText(e.currentTarget.value)}
        onChange={(e) => setOurText(e.target.value)}
        placeholder="Insert text..."
        className="border-2 rounded-xl p-2 w-[22rem] md:w-[30rem] h-[10rem] border-black"
        name=""
        id=""
      ></textarea>

      <div className="flex flex-col md:flex-row gap-10 justify-between ">
        <button
          className=" bg-green-500 text-white py-3 px-10 rounded-xl font-semibold tracking-widest"
          onClick={() => handleText()}
        >
          SPEAK
        </button>

        <button
          className=" bg-blue-500 text-white py-3 px-10 rounded-xl font-semibold tracking-widest"
          onClick={() => handlePause()}
        >
          PAUSE
        </button>

        <button
          className=" bg-red-500 text-white py-3 px-10 rounded-xl font-semibold tracking-widest"
          onClick={() => handleClear()}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default App;
