import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
       <div className="spinner"> <ClipLoader 
        size={150} 
        color={'#123abc'} 
        loading={loading} /></div>
      ) : (
        <TaskList />
      )}
    </div>
  );
}

export default App;
