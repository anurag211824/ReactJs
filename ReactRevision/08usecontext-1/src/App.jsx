import LoginForm from "./components/LoginForm"
import Profile from "./components/Profile"
import UserProvider from "./contexts/UserContext"

function App() {
 

  return (
   <UserProvider>
     <div className="h-screen bg-black flex justify-center items-center flex-col gap-3">
     <h1 className="text-center text-white text-2xl"> UseContext Demonstration</h1>
     <LoginForm/>
     <Profile/>

    </div>
   </UserProvider>  
  )
}

export default App
