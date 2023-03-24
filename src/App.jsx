import { BrowserRouter as Router, Routes, Route, BrowserRouter}
	from 'react-router-dom';
//import Home from './pages';
import Home from './screens/home';
import Accept from './screens/accept';
import Committee from './screens/committee';
import Login from './screens/Login/login';
import Register from './screens/register';
import Submission from './screens/submission';
import Evaluation from './screens/evaluation';
import {AuthorLogin} from "./screens/AuthorLogin/authorlogin"
import {AuthorRegister} from "./screens/AuthorRegister/authorregister"
import { GuestLogin } from './screens/GuestLogin/GuestLogin';
import UserLanding from './screens/UserLanding/UserLanding';
// import SubmitPaper from './screens/SubmitPaper/SubmitPaper';
import SubmitPaper from './screens/Submit/paper';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route exact path='/home'  element={<Home />} />
      <Route path='/accept' element={<Accept/>} />
      <Route path='/committee' element={<Committee/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/submission' element={<Submission/>} />
      <Route path='/evaluation' element={<Evaluation/>} />
      <Route path='/author/login' element={<AuthorLogin/>} />
      <Route path='/author/register' element={<AuthorRegister/>} />
      <Route path='/login/guest' element={<GuestLogin/>} />
      <Route path="/author/home" element={<UserLanding/>}/>
      <Route path="/author/home/submit" element={<SubmitPaper/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
