// import React, { useState } from 'react';

// function Index() {
//     const [task, setTask] = useState(""); // For the input field
//     const [tasks, setTasks] = useState([]); // For the list of tasks

//     const addTodo = (e) => {
//         e.preventDefault(); // Prevent form submission
//         if (task.trim()) {
//             setTasks([...tasks, task]); // Add the new task to the list
//             setTask(""); // Clear the input field
//         }
//     };

//     const removeTodo = (index) => {
//         setTasks(tasks.filter((_, i) => i !== index)); // Remove the selected task
//     };

//     return (
//         <div>
//             <form onSubmit={addTodo}>
//                 <input
//                     type="text"
//                     value={task}
//                     onChange={(e) => setTask(e.target.value)}
//                     placeholder="Add a new task"
//                 />
//                 <button type="submit">Add Task</button>
//             </form>
//             <ul>
//                 {tasks.map((t,i)=>(
//                     <li key={i}>{t}{" "}
//                     <button onClick={()=>{removeTodo(i)}}>RemoveItems</button></li>
//                 ))}
//             </ul>
//         </div>
//         )
// }


//-------part-2------
// import React,{useState} from 'react'

// function index() {
//     const [state,setstate]=useState(0)
    
//   return (
//     <div>
//     <h1>count:{state}</h1>
//       <button onClick={setstate(state+1)}>Increment</button>
//       <button onClick={setstate(state-1)}>Decrement</button>
//      </div>
//   )
// }

// export default index

//---------part-3 ---------
// import React,{useState} from 'react'

// function index() {
//     const[visible,setvisible]=useState(true)
//   return (
//     <div>
//         <button onClick={()=>{setvisible(!visible)}}>
//             {visible?"hide":"show"}Text
//         </button>
//         {visible && <p>hello</p>}
//     </div>
//   )
// }

// export default index

//LOGIN FORM-----
// import React, { useState } from 'react';

// function LoginForm() {
//     const [username, setUsername] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Welcome, ${username}!`);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Enter username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default LoginForm;

//RANDOM COLOUR
// import React, { useState } from 'react';

// function RandomColor() {
//     const [color, setColor] = useState("#ffffff");

//     const generateColor = () => {
//         const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//         setColor(randomColor);
//     };

//     return (
//         <div style={{ backgroundColor: color, height: "100vh" }}>
//             <button onClick={generateColor}>Generate Color</button>
//         </div>
//     );
// }

// export default RandomColor;

//Stopwatch

// import React, { useState, useEffect } from 'react';

// function Stopwatch() {
//     const [time, setTime] = useState(0);
//     const [running, setRunning] = useState(false);

//     useEffect(() => {
//         let timer;
//         if (running) {
//             timer = setInterval(() => setTime((prev) => prev + 1), 1000);
//         }
//         return () => clearInterval(timer);
//     }, [running]);

//     return (
//         <div>
//             <h1>{time}s</h1>
//             <button onClick={() => setRunning(true)}>Start</button>
//             <button onClick={() => setRunning(false)}>Pause</button>
//             <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
//         </div>
//     );
// }

// export default Stopwatch;

//Search Filter
// import React, { useState } from 'react';

// function SearchFilter() {
//     const [query, setQuery] = useState("");
//     const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

//     const filteredItems = items.filter((item) =>
//         item.toLowerCase().includes(query.toLowerCase())
//     );

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             <ul>
//                 {filteredItems.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default SearchFilter;

//Weather Display (Static Data)
// import React, { useState } from 'react';

// function Weather() {
//     const [city, setCity] = useState("");
//     const [weather, setWeather] = useState("");

//     const getWeather = () => {
//         const weatherData = {
//             London: "Rainy",
//             Paris: "Cloudy",
//             Tokyo: "Sunny",
//             Delhi: "Foggy"
//         };
//         setWeather(weatherData[city] || "No data available");
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Enter city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             />
//             <button onClick={getWeather}>Get Weather</button>
//             {weather && <h2>Weather: {weather}</h2>}
//         </div>
//     );
// }

// export default Weather;

//PASSWORD STRENGTH
import React, { useState } from 'react';

function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const checkStrength = (password) => {
        if (password.length < 6) return "Weak";
        if (/[A-Z]/.test(password) && /\d/.test(password)) return "Strong";
        return "Medium";
    };

    const handleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(checkStrength(newPassword));
    };

    return (
        <div>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
            />
            {password && <h3>Password Strength: {strength}</h3>}
        </div>
    );
}

export default PasswordChecker;

