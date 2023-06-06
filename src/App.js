import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import NewPassword from './containers/NewPassword';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
   <div className='mainContainer'>
    <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/ResetPassword' element={<ResetPassword/>} />
      <Route path='/NewPassword' element={<NewPassword/>} />
      <Route path='/SignUp' element={<SignUp/>} />
    </Routes>
   
   </div>
   </>
  );
}
export default App;
