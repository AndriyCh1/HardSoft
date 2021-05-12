import './App.css';
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import Description from './components/Description.jsx'
import Footer from './components/Footer.jsx'
 

function App() {
    return ( 
        <div className = "wrapper" >
            <Header/>
            <Intro />
            <Description />
            <Footer />
        </div>
    );
}

export default App;