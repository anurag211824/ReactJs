// 🟢 Easy (Basics & simple updates)
// Initialize a state variable count with 0, then write the code to increment it by 1. ✅
// Given a state const [name, setName] = useState("John"), update the name to "Jane". ✅
// Create a state array fruits with initial values ["apple", "banana"]. Add "orange" to the array. ✅
// Remove "banana" from the fruits array. ✅
// Toggle a boolean isVisible initialized to false. ✅
// Update the state of a user object { username: "user1" } to { username: "user2" }. ✅
// Using functional update, increment count by 5. ✅
// Add "coding" to an array of hobbies stored in state. ✅
// Remove the hobby "reading" from the array if it exists.✅
// Toggle a state boolean isLoading between true and false. ✅

// 🟡 Medium (Objects, arrays, nested structures)
// Given const [user, setUser] = useState({ name: "Alice", age: 30 }), update only the age to 31. ✅
// Add a new hobby "swimming" to the nested array user.hobbies in state: { name: "Alice", hobbies: ["reading"] }. ✅
// Remove a hobby "reading" from user.hobbies. ✅
// Update a nested object address in state: change city from "New York" to "Chicago". ✅
// Write a function to toggle an item in a selectedItems array (add if missing, remove if present). ✅
// Replace an item "React" with "ReactJS" inside an array of skills. ✅
// Update an array of todos to mark a todo as completed (change a completed property from false to true).✅
// Add a new property isAdmin: true to the user state object without overwriting existing properties.
// Given a state with multiple nested objects, update a deeply nested property safely.
// Implement a function that toggles between "ON" and "OFF" string states.

import { useEffect, useState } from "react";

const StateUpdatePractice = () => {
  // 1. const [count, setCount] = useState(0);
  // 2. const [name,setName] = useState("Jhon")

  // 3.const [fruits, setFruits] = useState(["apple", "mango"]);
  // const [fruitName, setFruitName] = useState("");
  // const [removeFruitName,setRemoveFruitName] = useState("")
  // const handleaddFruit = (fruitName) => {
  //   if (!fruits.find((fruit) => fruit === fruitName))
  //     setFruits((prev) => [...prev, fruitName]);
  //   else {
  //     alert("enter diff fruit please");
  //   }
  // };

  //  4. const handleRemoveFruit = (fruitName) =>{
  //      if (fruits.includes(fruitName))
  //     setFruits((prev)=> prev.filter((fruit)=>fruit!==fruitName))
  //      else
  //       alert("fruit not present")
  // }
  //  3. AnotherWay
  //   const handleaddFruit = (fruitName) => {
  //   if (!fruits.includes(fruitName)) {
  //     setFruits((prev) => [...prev, fruitName]);
  //   } else {
  //     alert("enter diff fruit please");
  //   }
  // };
  // 5.const [bool,setBool] = useState(false)

  // 6.const [user,setUser] = useState({userName:"Anurag"})
  // console.log(user);

  // const [count,setCount] = useState(0);

  //   const [hobbies, setHobbies] = useState([
  //     "Reading",
  //     "Cooking",
  //     "Gardening",
  //     "Drawing",
  //     "Painting",
  //     "Photography",
  //     "Writing",
  //     "Dancing",
  //     "Hiking",
  //     "Cycling",
  //     "Traveling",
  //     "Playing Guitar",
  //     "Swimming",
  //     "Gaming",
  //     "Coding",
  //   ]);
  //   const removeHobby = ()=>{
  //     const CurrentHobbies  = [...hobbies]
  //     const newHobbies = CurrentHobbies.filter((hobbie)=>hobbie!=="Coding")
  //     // setHobbies((prev)=> prev.filter(hobbie => hobbie!=="Coding"))
  //     setHobbies(newHobbies)
  //     console.log(newHobbies);

  //   }

  const [user1, setUser1] = useState({ name: "Alice", age: 30 });
  const handleClick = () => {
    setUser1((prev) => ({ ...prev, age: 31 }));
    const currentuser2 = { ...user2 };
    const newuser2 = {
      currentuser2,
      hobbies: [currentuser2.hobbies, "Dancing"],
    };
    // setUser2(prev=>({...prev,hobbies:[...prev.hobbies,"Dancing"]}))
    setUser2(newuser2);
  };
  const [user2, setUser2] = useState({
    name: "Alice",
    hobbies: ["reading", "singing"],
    address: {
      city: "New York",
    },
  });
  const removeHobby = () => {
    setUser2((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((h) => h !== "reading"),
    }));
  };
  const handleChangeCity = () => {
    setUser2((prev) => ({ ...prev, address: { city: "Chicago" } }));
  };

  const fruitBasket = ["apple", "banana", "cherry", "date", "elderberry"];
  const marketFruits = [
    "banana",
    "dragonfruit",
    "fig",
    "grapefruit",
    "kiwi",
    "lychee",
    "mango",
    "pear",
    "quince",
    "starfruit",
  ];

  const [basket, setBasket] = useState(fruitBasket);
  const buyMissingFruits = () => {
    marketFruits.forEach((fruit) => {
      if (!basket.includes(fruit)) {
        setBasket((prev) => [...prev, fruit]);
      }
    });
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Tailwind CSS",
    "TypeScript",
    "Next.js",
  ];
  const [selectedSkills, setSelectedSkills] = useState(skills);
  const replaceSkill = () => {
    setSelectedSkills((prev) =>
      prev.map((skill) => (skill === "React" ? "ReactJS" : skill))
    );
  };

  const [user, setUser] = useState({
    name: "Anurag",
    preferences: {
      theme: "light",
      notifications: { email: true, sms: false },
    },
  });
  const toggleSms = () => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        notifications: {
          ...prev.preferences.notifications,
          sms: !prev.preferences.notifications.sms,
        },
      },
    }));
  };

  const [task, setTask] = useState([
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Complete React project", completed: true },
    { id: 3, task: "Workout for 30 minutes", completed: false },
    { id: 4, task: "Call mom", completed: true },
    { id: 5, task: "Read a book", completed: false },
  ]);
  const toggleComplete = (id) => {
    //  setTask((prev)=>prev.map((task)=>task.id===id ? {...task,completed:!task.completed}:task))
    setTask((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    });
  };

  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Anurag Kumar",
      addresses: [
        {
          street: "123 Main St",
          city: "Patna",
          state: "Bihar",
          zip: "800001",
        },
      ],
    },
    {
      id: 2,
      name: "Riya Sharma",
      addresses: [
        {
          street: "456 Park Ave",
          city: "Delhi",
          state: "Delhi",
          zip: "110001",
        },
      ],
    },
  ]);

  const addNewAddress = (id) => {
    setPerson((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              addresses: [
                ...user.addresses,
                {
                  street: "789 Green Ln",
                  city: "Mumbai",
                  state: "Maharashtra",
                  zip: "400001",
                },
              ],
            }
          : user
      )
    );
  };
  const [userX, setUserX] = useState({
    name: "anurag",
    profile: {
      skills: ["React"],
    },
  });
  const addskills = () => {
    setUserX((prev) => ({
      ...prev,
      profile: { ...prev.profile, skills: [...prev.profile.skills, "NextJs"] },
    }));
  };

  const [usersY, setUsersY] = useState([
    { id: 1, name: "Anurag", age: 25 },
    { id: 2, name: "Raj", age: 30 },
  ]);

  const updateAgeById = (id, age) => {
    setUsersY((prev) =>
      prev.map((user) => (user.id === id ? { ...user, age: age } : user))
    );
  };

  const [userA, setUserA] = useState({
    name: "Anurag",
    profile: { skills: ["JS", "React", "Redux"] },
  });

  const removeSkill = (index) => {
    setUserA((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        skills: prev.profile.skills.filter((_, i) => i !== index),
      },
    }));
  };

  const [todosY, setTodosY] = useState([
    { id: 1, text: "Sleep", completed: true },
    { id: 2, text: "Code", completed: false },
    { id: 3, text: "hi", completed: true },
    { id: 4, text: "Hello", completed: false },
  ]);

  const clearCompletedTodo = () => {
    setTodosY((prev) => prev.filter((todo) => todo.completed !== true));
  };

  const [post, setPost] = useState({
    title: "My Post",
    comments: [
      { id: 1, text: "Nice!" },
      { id: 2, text: "Awesome!" },
    ],
  });

  const updateCommentWithId = (id, updateComment) => {
    setPost((prev) => ({
      ...prev,
      comments: prev.comments.map((comment) =>
        comment.id === id ? { ...comment, text: updateComment } : comment
      ),
    }));
  };

  useEffect(() => {
    // console.log(user1);
    // console.log(user2);
    // console.log(basket);
    // console.log(selectedSkills);
    console.log(user);
    console.log(task);
    console.log(person);
    console.log(userX);
    console.log(usersY);
    console.log(userA);
    console.log(todosY);
    console.log(post);
  }, [
    user,
    user1,
    user2,
    basket,
    selectedSkills,
    task,
    person,
    userX,
    usersY,
    userA,
    todosY,
    post,
  ]);

  return (
    <>
      {/* 1. <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <div>{count}</div> */}

      {/* 2. <button onClick={()=>setName((prev)=> prev==="Jhon" ? "anu":"Jhon")}>ChnageName</button>
     {name} */}

      {/* 
      3.<input type="text"value={fruitName} onChange={(e) => setFruitName(e.target.value)} placeholder="enter fruit"/>
      <button onClick={() => handleaddFruit(fruitName)}>Add</button>
      <br />
      4. <input type="text"value={removeFruitName} onChange={(e) => setRemoveFruitName(e.target.value)} placeholder="enter fruit to remove"/>
      <button onClick={() => handleRemoveFruit(removeFruitName)}>Remove</button>
      {fruits.map((fruit) => (<p key={fruit}>{fruit}</p>))} */}

      {/* 5. <button onClick={()=>setBool(prev=>!prev)}>hi/hello ji</button>
      {
        bool === true ? (<p>hii</p>) : (<p>helloe</p>)
      } */}
      {/* <p> {user.userName}</p>
     <br />
     <button onClick={()=>setUser(prev=>({...prev,userName:"Anurag Kumar"})) 
    }>Change UserName</button> */}

      {/* <p>{count}</p>
    <button onClick={handleClick}>inc 5</button> */}

      {/* <button onClick={handleClick}>add</button>
    <br />
    <button onClick={removeHobby}>Remove</button> */}
      <p> </p>

      <button onClick={handleClick}>Click</button>
      <br />
      <button onClick={removeHobby}>Remove</button>
      <br />
      <button onClick={handleChangeCity}>Change address city</button>
      <br />
      <button onClick={buyMissingFruits}>BUY</button>
      <br />
      <button onClick={replaceSkill}>Replace skill</button>
      <br />
      <button onClick={toggleSms}>toggle sms</button>
      <br />
      <button onClick={() => toggleComplete(3)}>toggle complete</button>

      <br />
      <button onClick={() => addNewAddress(2)}>add address</button>
      <br />
      <button onClick={() => addskills()}>AddSkill</button>
      <br />
      <button onClick={() => updateAgeById(1, 13)}>update Age by id</button>
      <br />
      <button onClick={() => removeSkill(0)}>RemveSkill</button>
      <button onClick={() => clearCompletedTodo()}>Only remain todo</button>
      <br />
      <button onClick={() => updateCommentWithId(2, "I Love You Himanshi")}>
        UpdateComment
      </button>
    </>
  );
};

export default StateUpdatePractice;
