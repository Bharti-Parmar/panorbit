import { AccountCard } from './components/multicellulars/Cards/Card';
import './App.css';
import bgImage from './assests/Images/background.svg';

function App() {
  return (
    <div className="App">
      <img src={bgImage} alt="bgimage" />
      <AccountCard />
    </div>
  );
}

export default App;
