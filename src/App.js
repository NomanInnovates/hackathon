import './App.css';
import Navigation from './navigation/Navigation';
import { useSelector } from "react-redux"

function App() {
  const store = useSelector(store => store)
  // console.log("app",store)
  return (
    <div className="App">
    <Navigation />
    </div>
  );
}

export default App;
