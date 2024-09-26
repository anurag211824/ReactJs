import React from "react";
const handleClickbtn = (user) => {
  console.log(`Welcome, ${user}. How are you?`);
};

// function handleBtnClick(event){
// console.log(event);
// alert('Hey i am onclick Event')
// }
const handleBtnClick = (event) => {
  console.log(event);
  console.log(event.target);

  alert("hello world");
};
const handleSubmit = (event) => {
  console.log(event);
};
const EventHandling1 = () => {
  return (
    <>
      <button
        className="bg-slate-400 m-5 rounded-lg text-1xl px-2"
        onClick={handleBtnClick}
      >
        Click me 1
      </button>
      <br />
      <button
        onClick={() => handleClickbtn("anurag")}
        className="bg-slate-400 m-5 text-1xl rounded-lg px-2"
      >
        Click me 2
      </button>
      <br />
      <button
        onClick={(event) => handleSubmit(event)}
        className="bg-slate-400 m-5 rounded-lg text-1xl px-2"
      >
        Submit
      </button>
      <br />
      <button
        className="bg-slate-400 m-5 rounded-lg text-1xl px-2"
        onClick={() => alert("hello")}
      >
        Inline arr Function
      </button>
    </>
  );
};

export default EventHandling1;
