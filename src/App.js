import Sidenav from './components/Menubar/Sidenav'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Menubar/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard';

import AssessmentTest from './components/pages/Assessment/Assessment-Test/MainAssesment/AssessmentTest'

import Register from './components/Registration/Register'
import TermsConditions from './components/pages/Assessment/Assessment-Test/Terms & Condions/TermsConditions'
import TestResult from './components/pages/Assessment/Assessment-Test/TestCompletionPage/TestResult/TestResult';
import CertificationPage from './components/pages/Assessment/Assessment-Test/TestCompletionPage/Certification/CertificationPage';
import AdminStatement from './components/pages/Assessment/Admin-Statement/AdminStatement/AdminStatement';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Protected from './components/pages/protectedRoutes/Protected';
import Login2 from './components/Login/Login2';
import Signup2 from './components/Signup/Signup2';
import DataTableTest from './components/pages/Settings/DataTableTest';
import EditData from './components/pages/Settings/EditData';
import Sample from './components/pages/Settings/Sample';
import Register2 from './components/Registration/Register2';
import UpdateData from './components/pages/Settings/UpdateData';

function App() {



  return (
    <div>
      <BrowserRouter>
      <Routes>
    
      <Route exact path="/"  element={  <Login/> }></Route>
      <Route exact path="/sample"  element={ <Sample /> }></Route>
      <Route path="/login2" exact element={ <Login2/> }></Route>
      <Route path="/signup2" exact element={ <Signup2/> }></Route>
      <Route path="/signup" exact element={ <Signup/> }></Route>
      <Route path="/Data-table" exact element={ <DataTableTest />   }></Route>
        <Route path="/" exact element={<Protected><Sidenav/></Protected>}></Route>
        <Route path="/navbar" exact element={<Protected  ><Navbar/></Protected> }></Route>
        <Route path="/dashboard" element={<Protected  > <Dashboard /> </Protected>} />
        <Route path="/register2" element={<Protected> <Register2 /> </Protected>} />
        <Route path="/register" element={<Protected> <Register /> </Protected>} />
        <Route path="/terms_conditions" element={<Protected>  <TermsConditions/> </Protected>} />
        <Route path="/assessment-test" element={<Protected> <AssessmentTest/> </Protected>} />
        <Route path="/test-result" element={<Protected>  <TestResult/> </Protected>} />
        <Route path="/certification-page" element={<Protected>  <CertificationPage/> </Protected>} />
        <Route path="/admin-statement" element={<Protected> <AdminStatement/> </Protected>} />
        <Route path="/edit-data/:sStatementID" element={ <EditData/> } />
        <Route path="/updatedata/:sStatementID" element={ <UpdateData/>} />
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
