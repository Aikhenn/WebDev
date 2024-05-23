
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Home';
import AboutPage from './Components/About';
import LocationPage from './Components/Location';
import ProjectsPage from './Components/Projects';
import EventsPage from './Components/Events';
import Footer from './Components/Footer';




function App() {
  return (
    <>
  
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/location' element={<LocationPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/events' element={<EventsPage />}/>
     
      </Routes>
      <Footer />
    </Router>



   
 

   
  
    
    </>

   
  )

  


}

export default App;