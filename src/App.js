import './App.css';
import Header from './Components/Header Section/Header'
import Home from './Components/Home Section/Home'
import Popular from './Components/Popular Section/Popular';
import Recent from './Components/Recent Section/Recent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Popular></Popular>
      <Recent></Recent>
    </div>
  );
}

export default App;
