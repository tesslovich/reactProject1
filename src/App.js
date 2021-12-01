import './App.scss';
import Header from './components/Header/Header.js';
import Application from './components/Application/Application.js';
import Aboutus from './components/Aboutus/Aboutus.js';
import Appwork from './components/Appwork/Appwork.js';
import Screenshots from './components/Screenshots/Screenshots.js';
import Feedback from './components/Feedback/Feedback.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
			<Header></Header>
			<Application></Application>
			<Aboutus></Aboutus>
			<Appwork></Appwork>
			<Screenshots></Screenshots>
			<Feedback></Feedback>
			<Footer></Footer>
    </div>
  );
}

export default App;
