import { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import Stats from "./Stats";

const getLocalStorage = () => {
  let links = localStorage.getItem("link");
  if (links) {
    return JSON.parse(links);
  } else {
    return [];
  }
};

function Form() {
  const [textInput, setTextInput] = useState("");
  const [shortInput, setShortInput] = useState(getLocalStorage());
  const [error, setError] = useState(false);
  const [buttonText, setButtonText] = useState("copy");

  const inputEl = useRef(null);

  // useEffect(function () {
  //   function callback(e) {
  //     if (e.code === "Enter") inputEl.current.focus();
  //   }

  //   document.addEventListener("keydown", callback);
  //   return () => document.removeEventListener("keydown", callback);
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!textInput) {
      setError((prev) => !prev);
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tinyurl.com/api-create.php?url=${encodeURIComponent(textInput)}`,
        );
        const result = await response.text(); // TinyURL returns the shortened URL as plain text
        setShortInput(result);
      } catch (error) {
        console.error("Error shortening URL:", error);
      }
    };

    fetchData();
  }

  function handleCopy() {
    navigator.clipboard.writeText(shortInput);
    if (!shortInput) return;
    setButtonText("copied!");
  }

  useEffect(
    function () {
      localStorage.setItem("link", JSON.stringify(shortInput));
    },
    [shortInput],
  );

  return (
    <section id="form" className="relative bg-gray-100 pb-32">
      <form
        className="container relative -top-20 mx-auto max-w-xs rounded-md bg-darkViolet p-8 md:-top-14 md:max-w-6xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`${error ? "border border-red" : ""} ml-0 mr-8 w-full rounded-md border-2 px-4 py-3 outline-none focus:border-gray-300 md:mb-0 md:ml-2 md:w-[55rem] md:py-2.5`}
          placeholder="Shorten a link here..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          ref={inputEl}
        />
        {error && (
          <p className="text-xs italic text-red md:hidden">please add a link</p>
        )}

        <Buttons className="mt-4 w-full rounded-md py-3 md:mt-0 md:w-40 md:py-2.5">
          Shorten it!
        </Buttons>
        {error && (
          <p className="mt-1 hidden text-xs italic text-red md:block">
            please add a link
          </p>
        )}
      </form>

      <div className="container mx-auto -mt-12 flex max-w-xs flex-col items-center justify-between rounded-md bg-white p-3 text-center md:-mt-8 md:max-w-6xl md:flex-row md:text-start">
        <p className="w-full border-b font-semibold md:border-none">
          {textInput}
        </p>

        <p className="py-3 font-semibold text-cyan md:py-0">{shortInput}</p>

        <Buttons
          className={`mx-3 w-full rounded-md md:w-40 ${shortInput ? "focus:bg-darkViolet" : ""}`}
          onClick={handleCopy}
        >
          {buttonText}
        </Buttons>
      </div>

      <Stats />
    </section>
  );
}

export default Form;
