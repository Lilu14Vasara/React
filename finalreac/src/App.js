import logo from './logo.svg';
import './App.css';
import Card from './components/card';

let myObj={
  username:'hitesh',
  
  age:31
}//we pass array object incard below card in pass different different name of user
function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwand test</h1>
        {/* first take code from devUi components  for use of props for creating same cards multiple time we need create differnt components file in*/}
       {/* <Card  someobj={myObj}/>  */}
       <Card username='nikhil'/>
       <Card username='chai or code'/>       
   {/**if you want to mltiple cards then call Card instance of writing full code  */}











     {/*use of tailwand   below example take form tailwand website
     <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/> */}
   {/* all tag are closing including img tag because it is jsx  above image from pixel website copy addresh*/}
  {/* <div class="pt-6 md:p-8 text-center md:text-left space-y-4"> */}
    {/* <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  );
}

export default App;
