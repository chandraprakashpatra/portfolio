
import './App.css'

// import Background from './Components/background'
import Header from './Components/header'
import Profile from './Components/profile'
import Contact from './Components/contact'
import Cert from './Components/cert&acheive'
import Skills from './Components/skills'
// import './app.css'
import Experience from './Components/experience'
import background from './back.jpg'
function App() {
 

  return (
    <div style={{ backgroundImage: `url(${background})` }} >
      <Header></Header>
      {/* <Background></Background> */}
      <Profile></Profile>
      <Experience></Experience>
      <Skills></Skills>
      <Cert></Cert>
      <Contact></Contact>
    </div>
  );
};

export default App
