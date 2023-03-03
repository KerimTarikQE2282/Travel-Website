import {Routes,Route} from "react-router-dom"
import LandingPage from './Components/LangingPage'
import PopularPackages from "./Components/Packages/PopularPackages/PopularPackages";
import AllPackages from "./Components/Packages/AllPackages/AllPackages";
import BookNow from "./Components/BookNow/BookNow";
import AboutTheFounder from './Components/About/AboutTheFounder/AboutTheFounder'
import AboutTheOrganization from './Components/About/AboutTheOrganization/AboutTheOrganization'
import ContactUs from "./ContactUs/ContactUs";
import NaturalHeritages from './Components/AboutEthiopia/Natural Heritages/NaturalHeritages'
import CulturalHeritages from './Components/AboutEthiopia/CultuaralHeritages/CulturalHeritages'
import LoginForm from "./Components/Login/LoginForm"
import AdminDashBoard from "./Components/AdminDashBoard/AdminDashBoard";
import AddEvent from "./Components/AdminDashBoard/AddEvent";

function App() {
  return (
    <div className="App">
      <Routes>
      
      <Route  path='/' element={<LandingPage/>}></Route>
      <Route  path='PopularPackages' element={<PopularPackages/>}></Route>
      <Route  path='AllPackages' element={<AllPackages/>}></Route>
      <Route  path='/BookNow' element={<BookNow/>}></Route>
      <Route  path='/AboutTheOrganization' element={<AboutTheOrganization/>}></Route>
      <Route  path='/AboutTheFounder' element={<AboutTheFounder/>}></Route>
      <Route  path='/ContactUs' element={<ContactUs/>}></Route>
      <Route  path='/CulturalHeritages' element={<CulturalHeritages/>}></Route>
      <Route  path='/NaturalHeritages' element={<NaturalHeritages/>}></Route>
      <Route  path='/LoginForm' element={<LoginForm/>}></Route>
      <Route  path='/AdminDashBoard' element={<AdminDashBoard/>}></Route>
      <Route  path='/AddEvent' element={< AddEvent/>}></Route>
     
      
     
      </Routes>
    </div>
  );
}

export default App;
