import React from "react";

const handleWelcomeUser = (user) => {
  alert(`Hey ${user}, how are you?`);
};

const handleHover = () => {
  alert("Hey, thanks for hovering over me!");
};

const EventProps2 = () => {
  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Anurag")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

export default EventProps2;

const WelcomeUser = (props) => {
  const handleGreetings = () => {
    console.log("Hey, welcome");
    props.onClick();
  };

  return (
    <>
      <button
        className="bg-slate-400 m-5 rounded-lg text-1xl px-2"
        onClick={props.onClick}
      >
        Click
      </button>
      <button
        className="bg-slate-400 m-5 rounded-lg text-1xl px-2"
        onMouseEnter={props.onMouseEnter}
      >
        HoverMe
      </button>
      <button
        className="bg-slate-400 m-5 rounded-lg text-1xl px-2"
        onClick={handleGreetings}
      >
        Greetings
      </button>
    </>
  );
};
