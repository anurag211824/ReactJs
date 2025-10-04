import React from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";

function LoginForm() {
  const { setUser } = useContext(UserContext);
  const [name,setName] = useState()
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser(name)
    console.log(e.target.value);
    

  }
  return (
    <form onSubmit={handleSubmit} className="text-white">
      <div className="flex gap-4">
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} id="name" type="text" placeholder="username" />
      </div>
      {/* <div className="flex gap-4">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="password" />
      </div> */}
      <button className="bg-blue-500 p-1" type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
