import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App" >
      <div className ="container">
        <Dictionary />
        <footer className="text-center">
          coded by Kenzi👺and is{" "}
          <a href="https://github.com/Kenzimonster/dictionary-app" target="_blank" rel="noreferrer">open-soured on GitHub</a>
        {" "}and{" "}
        <a href="https://bejewelled-sfogliatella-dbe6b3.netlify.app/" target="_blank" rel="noreferre">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}