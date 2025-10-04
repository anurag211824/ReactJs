
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <p className="text-red-600">Please Login</p>;
  return <div className="text-white">Welcome {user}</div>;
}

export default Profile;
