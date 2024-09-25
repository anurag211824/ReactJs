import React from 'react';

const EventPropagation3 = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    //event.stopPropagation();
    console.log("Child clicked");
  };

  const handleChildOnClick = () => {
    console.log("Child OnClick fired");
  };

  return (
    <section className="main-div p-10 bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="g-div bg-blue-500 p-8 rounded-lg shadow-lg text-white" onClickCapture={handleGrandParent}>
        GrandParent Div
        <div className="p-div bg-green-500 p-6 mt-4 rounded-lg shadow-md text-white" onClickCapture={handleParentClick}>
          Parent Div
          <button
            className="c-div bg-red-500 text-white p-4 mt-4 rounded-lg hover:bg-red-600 focus:outline-none shadow-sm"
            onClick={handleChildOnClick}  // Regular onClick handler
            //onClickCapture={handleChildClick}  // Capture event for propagation
          >
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventPropagation3;
