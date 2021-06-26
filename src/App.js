import Navbar from "./Components/Nav";
import Mainsection from "./Components/Mainsection";
import Suggestions from "./Components/Suggestions";

function App() {

  return (
    <div className="bg-blue-100 md:flex md:flex-col flex-wrap md:h-screen w-full text-center items-center ">
      <Navbar/>
      <div className="md:flex md:flex-row w-full justify-evenly md:h-5/6 flex-wrap">
        <Mainsection/>  
        <Suggestions/>
      </div>
    </div>
  );
}

export default App;
