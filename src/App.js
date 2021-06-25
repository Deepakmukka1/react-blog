import Navbar from "./Components/Nav";
import Mainsection from "./Components/Mainsection";
import Suggestions from "./Components/Suggestions";
function App() {
  return (
    <div className="bg-blue-500 flex flex-col flex-wrap h-screen w-full text-center items-center">
      <Navbar/>
      <div className="bg-green-500 flex w-full justify-evenly h-5/6">
        <Mainsection/>
        <Suggestions/>
      </div>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
