import{ BrowserRouter as Router, Route,Routes} from 'react-router-dom';  
import { useState, useEffect } from 'react'

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QueueList from "./components/QueueList";
import AddPatientForm from "./components/AddPatientForm";


function App() {
const today = new Date().toISOString().split("T")[0];

   const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patientsData");
    if (saved) {
      const { date, patients } = JSON.parse(saved);
      if (date === today) {
        return patients;
      }
    }
    return [];
  });

  // ✅ Save patients to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("patientsData", JSON.stringify({date: today, patients})
  );
  }, [patients, today]);

  const handleAddPatient = (newPatient) => {
    const nextQueueNumber = patients.length > 0 ? patients[patients.length - 1].queueNumber + 1 : 1

     const patientWithNumber = {
      ...newPatient,
      id: Date.now(), // unique ID
      queueNumber: nextQueueNumber,
    };
    
    setPatients((prev) => [...prev, patientWithNumber]);
  };

  const handleRemovePatient = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };
     return(
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />

        <div className="flex-grow p-6 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* ✅ Queue Dashboard */}
            <Route
              path="/dashboard"
              element={
                <div className="space-y-6">
                  <AddPatientForm onAddPatient={handleAddPatient} />
                  <QueueList
                    patients={patients}
                    onRemovePatient={handleRemovePatient}
                  />
                </div>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

