import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setcounter]=useState(15) //not use const variable  ,its called hooks
  //let couner=15 this work do above user state
  const specificvalue=()=>{
    if(counter<0){

    }
  }
  const addvalue=()=>{
     console.log("value to added",counter);
    //couner=couner+1 not update like this counter
    setcounter(counter+1)//this is function which increase value of counter
    //it is used for date all page value where counter is present
  }
  const removevalue=()=>{
    setcounter(counter-1)
  }
  return (
  <>
    <h1>button experiment</h1>
    <h2>Counter value :{}</h2>

    <button onClick={addvalue}>Add value{counter}</button>
    <button onClick={removevalue}>Remove value{counter}</button>
  </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   let [counter, setcounter] = useState(15); // Using hooks to store the counter state

//   // Function to add value but not exceed 20
//   const addvalue = () => {
//     if (counter < 20) {
//       setcounter(counter + 1); // Increase counter by 1
//       console.log("Value added:", counter + 1);
//     } else {
//       console.log("Maximum counter value is 20");
//     }
//   };

//   // Function to remove value but not go below 0
//   const removevalue = () => {
//     if (counter > 0) {
//       setcounter(counter - 1); // Decrease counter by 1
//       console.log("Value removed:", counter - 1);
//     } else {
//       console.log("Minimum counter value is 0");
//     }
//   };

//   return (
//     <>
//       <h1>Button Experiment</h1>
//       <h2>Counter value: {counter}</h2> {/* Display current counter value */}

//       <button onClick={addvalue}>Add value</button> {/* Add value button */}
//       <button onClick={removevalue}>Remove value</button> {/* Remove value button */}
//     </>
//   );
// }

// export default App; for conditions
//virtual dom ,fibre-it help us to not updating imidieat if three changr occurs direly then its goes through direct third without updating second update
//reconciliaion-behind the seen is virtual dom