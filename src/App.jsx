import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import DBLab from './Pages/DB-Lab';
import DashBoard from './Pages/DashBoard';
import LabTask2 from './Components/Lab-Tasks/Lab-Task-2';
// import LabTask3 from './Components/Lab-Tasks/Lab-Task-3';
import LabTask4 from './Components/Lab-Tasks/Lab-Task-4';
import LabTask5 from './Components/Lab-Tasks/Lab-Task-5';
import LabTask6 from './Components/Lab-Tasks/Lab-Task-6';
import LabTask1 from './Components/Lab-Tasks/Lab-Task-1';
import Footer from './Components/Footer';
const App = () => {
    return (
        <Router>
            <Nav/>
             <Routes>
             <Route path="/Db-Lab" element={<DBLab />} />
             <Route path="/" element={<DashBoard/>} />
             <Route path="/Lab-Task-1" element={<LabTask1/>} />
             <Route path="/Lab-Task-2" element={<LabTask2/>} />
             {/* <Route path="/Lab-Task-3" element={<LabTask3/>} /> */}
             <Route path="/Lab-Task-4" element={<LabTask4/>} />
             <Route path="/Lab-Task-5" element={<LabTask5/>} />
             <Route path="/Lab-Task-6" element={<LabTask6/>} />
             </Routes>
             <Footer/>
        </Router>
    );
};

export default App;
