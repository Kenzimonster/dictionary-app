import BattleSisterClear from "./BattleSisterClear.png";
import './App.css';

function App() {
  return (
    <div className="App container" >
      <header className="App-header">
        <div className="row">
        <div className="col-3">
        <img src={BattleSisterClear} className="App-logo img-fluid" alt="Sister of Battle reading a book" />
        </div>
        <div className="col-9"><h1>Inquisition Approved Dictionary</h1></div>
        </div>
      </header>
    </div>
  );
}

export default App;
