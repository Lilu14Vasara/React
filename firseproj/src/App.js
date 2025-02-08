import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const[colour,setcolour]=useState("olive")
  return (
   <>
    <div className='w-full h-screen duration-200'
      style={{backgroundColor:colour}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={()=>setcolour("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={()=>setcolour("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={()=>setcolour("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
          </div>
        </div>
    </div>
   </>
  );
}

export default App;
