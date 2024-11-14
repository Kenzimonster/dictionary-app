import BattleSisterClear from "./BattleSisterClear.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App" >
      <div className ="container">
      <header className="App-header">
        <div className="row">
          <div className="col-3">
            <img src={BattleSisterClear} className="App-logo img-fluid" alt="Sister of Battle reading a book" />
          </div>
          <div className="col-9">
            <div>
              <h1>Inquisition Approved Dictionary</h1>
            </div>
            <div>
             <Dictionary />
           </div>
          </div>
        </div>
      </header>
      <footer>
        coded by Kenzi👺
      </footer>
    </div>
    </div>
  );
}