import { useEffect, useState } from 'react'

const UseEffectChallenge = () => {
    const [count ,setCount]=useState(0)
    const [name,setName ]=useState("Anurag")

    useEffect(()=>{
        document.title=`count: ${count} `
    },[count])
    //use Effect hook to display the name in th cnsole as thr input feild changes
    useEffect(()=>{
     console.log(name);
     
    },[name])
  return (
   <>
<p className='bg-black text-white font-playwrite'>
    {count}
</p>
<button className='bg-green-400 text-white font-playwrite' onClick={()=>setCount(count+1)}>
    Click to Increase
</button>
<p className='bg-black text-white font-playwrite'>Name:{name}</p>
   <input className='bg-orange-200 border-lime-200 px-10' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
   
   </>
  )
}

export default UseEffectChallenge