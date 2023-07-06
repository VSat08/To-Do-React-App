import './App.css';
import { useEffect, useState } from 'react'
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';



function App() {
  const [showComponent1, setShowComponent1] = useState(false);

  useEffect(() => {
    const hasShownComponent1 = localStorage.getItem('hasShownComponent1');

    if (!hasShownComponent1) {
      setShowComponent1(true);
      localStorage.setItem('hasShownComponent1', 'true');
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent1(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      localStorage.setItem('hasShownComponent1', 'true');
    };
  }, []);



  return (
    <div className="App">
      {showComponent1 ? (
        <Loading />
      ) : (
          <TodoList />
      )}
    </div>
  );
}

export default App;

  