import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
function App() {
  return (
    <div className="App">
      <TopBar />
       {/** <Home /> */}  
       <Single />   
    </div>
  );
}

export default App;
