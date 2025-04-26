"use client"
import { useAuth, useUser } from '@clerk/nextjs';
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const {isLoaded,userId,sessionId,getToken}=useAuth()
    // const {isLoaded,isSignedIn,user}=useUser()

    if (!isLoaded || !userId) return null;
  return (
    <div>
        <div>Counter{count}</div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>

  )
}

export default Counter