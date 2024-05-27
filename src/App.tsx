

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Home';
import AboutPage from './Components/About';
import LocationPage from './Components/Location';
import ProjectsPage from './Components/Projects';
import EventsPage from './Components/Events';
import AdminPage from './Components/AdminUI/AdminPage';
import { Box } from '@mui/material';




function App() {
  return (
    <>
    <Box sx ={{}}>
    <Router >
   
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/location' element={<LocationPage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/events' element={<EventsPage />}/>
        <Route path='/admin' element={<AdminPage />}/>
       
     
      </Routes>
     
    </Router>
    </Box>



   
 

   
  
    
    </>

   
  )

  


}

export default App;