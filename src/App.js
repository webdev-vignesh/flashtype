import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import ChallengeSection from './components/ChallengeSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing/>
      <ChallengeSection/> 
      <Footer/>
    </div>
  );
}

export default App;
