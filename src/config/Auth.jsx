import { useState } from 'react'
import {auth, googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword , signInWithPopup ,signOut } from 'firebase/auth'

const Auth = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    console.log(auth?.currentUser?.email);

    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email , password);
        } catch(err) {
            console.error(err);
        }
    }
    const signInWithGoogle = async () =>{
        try{
            await signInWithPopup(auth,googleProvider);
        } catch(err) {
            console.error(err);
        }
    }
    const logOut = async () =>{
        try{
            await signOut(auth);
        } catch(err) {
            console.error(err);
        }
    }

  return (
  <div class="flex justify-center items-center h-screen bg-slate-500">
  <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-3xl block text-center font-semibold"> Login</h1>
     
      <div class="mt-3">
          <label for="username" class="block text-base mb-2">Username</label>
          <input 
          onChange={e => setEmail(e.target.value)}
          type="text"class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
      </div>
      <div class="mt-3">
          <label for="password" class="block text-base mb-2">Password</label>
          <input 
          onChange={e => setPassword(e.target.value)}
          type="password"class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
      </div>
      <div class="mt-3 flex justify-between items-center">
          <div>
              <label>Remember Me</label>
              <input className='ml-1' type='checkbox'/>
          </div>
      </div>
      <div class="mt-5 flex-3 gap-2">
          <button 
          onClick={signIn}
          type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button>
          <button 
          onClick={signInWithGoogle}
          type="submit" class="mt-2 border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Sign Up with google</button>
      </div><div class="mt-5">
          <button 
          onClick={logOut}
          type="submit"  class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-bold">Logout</button>
      </div>
  </div>
</div>
  )
}

export default Auth
