import "./App.css";
import { Footer } from "./Components/Footer";
import { InputArea } from "./Components/InputArea";
import { SideBar } from "./Components/SideBar";

function App() {
  return (
    <div className="App">
      
      <SideBar />
      <div>
      <InputArea />
      <Footer/>
      </div>
     
    </div>
    
  );
}

export default App;
