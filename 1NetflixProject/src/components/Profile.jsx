import React from "react";

const Profile = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Profile Card Challenge</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard
          name="Anurag Kumar"
          age={30}
          greetings={
            <div>
              <strong>Hi Anurag, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies: Reading books, Hiking</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors">Contact</button>
        </ProfileCard>
        <ProfileCard
          name="Anurag Kumar"
          age={30}
          greetings={
            <div>
              <strong>Hi Anurag, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies: Reading books, Hiking</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors">Contact</button>
        </ProfileCard>
        <ProfileCard
          name="Anurag Kumar"
          age={30}
          greetings={
            <div>
              <strong>Hi Anurag, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies: Reading books, Hiking</p>
          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors">Contact</button>
        </ProfileCard>
      </div>
    </>
  );
};

export default Profile;

function ProfileCard({ name, age, greetings, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">Name: {name}</h2>
      <p className="text-gray-700 mb-2">Age: {age}</p>
      <p className="mb-4">{greetings}</p>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}
