import logo from './logo.svg';
import {useState,useCallback,useEffect,useRef} from 'react'

//for reference useref is used  for this we need oe vaeiable
function App() {
  const [length,setlength]=useState(8)
  const[numbers,setnumbers]=useState(false)
  const[character,setcharacter]=useState(false)
  const[password,setpassword]=useState("")

  //useref hook
     const passwordRef=useRef(null)//and go to the button


  //useCallBack(fun,dependency)
  const passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) {
      str +="0123456789"
    }
    if (character) {
      str +="!@#$%^&*-_+=[]{}~`"
    }
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
      
    }
    setpassword(pass)
    

  },[length,numbers,character,setpassword])//usecallback for optimization
  
  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select()//for better experince to the user
    passwordRef.current?.setSelectionRange(0,3)//select only 3 character
      window.navigator.clipboard.writeText(password)//for copy the value
  },[password])

  useEffect(()=>{//for calling function run function,if any value change in the page this function tun all times
    passwordGenrator()
  },[length,numbers,character,passwordGenrator])
  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-center text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center my-3'>Password</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'
           value={password}
           className='outline-none w-full py-1 px-3 '
           placeholder='password' readOnly
           ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-c-2'>
          <div className='flex item-center gap-x-1'>
            <input type='range' 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
              />
              <label >Length:{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input className='' type='checkbox' 
              defaultChecked={numbers}
              id='numberinput'
              onChange={()=>{
                setnumbers((prev)=>!prev);//change privious value
              }}
              />
              <label>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input className='' type='checkbox' 
              defaultChecked={character}
              id='numberinput'
              onChange={()=>{
                setcharacter((prev)=>!prev);//change privious value
              }}
              />
              <label>Characters</label>
          </div>
        </div>
       </div>
    
    </>
  );
}

export default App;
//npx create-react-app 10project
//npm install web-vitals
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your component files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

