import  { useEffect, useState } from "react";

const Fetching = () => {
  const [apiData, setApiData] = useState([]);
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => setApiData(data))
//     .catch((error) => console.log(error));
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log(error.message));
},[])
  return (
    <>
      <div className="font-playwrite">
        <h1 className="flex justify-center items-center">Users</h1>
        <ul className="bg-orange-100">
          {apiData.map((user, index) => (
            <li className="mb-5 bg-green-400" key={index}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Fetching;
