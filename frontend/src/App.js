
import './App.css';
import Home from './Pages/Home';
import Academy from './Pages/Academy';
import Contact from './Pages/Contact';
import OurCall from './Pages/OurCall';
import Churchonline from './Pages/Churchonline';
import Blog from './Pages/Blog';
import OurHistory from './Pages/OurHistory';
import Resources from './Pages/Resources';
import UnitDepartment from './Pages/UnitDepartment';
import Leadership from './Pages/Leadership';
import LeadershipAudioResource from './Pages/VideoAudioSwitch';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Admin/Login/Login';
import  Dashboard from "./Admin/Dashboard/Dashboard"
import Profile from './Admin/Profile/Profile';
import PageNotFound from './Admin/PageNotFound/PageNotFound';
import Resourcesaudio from './Pages/Resourcesaudio';
import Resourcesvideo from './Pages/Resourcesvideo';






function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/academy' element={<Academy/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about/our-call' element={<OurCall/>}/>
          <Route path='/church-online'element={<Churchonline/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about/our-history' element={<OurHistory/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/about/unit-department' element={<UnitDepartment/>}/>
          <Route path='/about/leadership' element={<Leadership/>}/> 
          <Route path='/LeadershipAudioResource' element={<LeadershipAudioResource/>}/>  
          <Route path='/admin-login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/page-not-found' element={<PageNotFound/>}/>
          <Route path='/resources_audio' element={<Resourcesaudio/>}/>
          <Route path='/resources_video' element={<Resourcesvideo/>}/>


        </Routes>
      </Router>       
      
     
      
    </div>
  );
}

export default App;
