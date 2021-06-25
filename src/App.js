import Navbar from "./Components/Nav";
import Mainsection from "./Components/Mainsection";
import Suggestions from "./Components/Suggestions";
function App() {
  return (
    <div className="bg-blue-500 md:flex md:flex-col flex-wrap md:h-screen w-full text-center items-center">
      <Navbar/>
      <div className="bg-green-500 md:flex md:flex-row w-full justify-evenly md:h-5/6 flex-wrap">
        <Mainsection/>  
        <Suggestions/>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
