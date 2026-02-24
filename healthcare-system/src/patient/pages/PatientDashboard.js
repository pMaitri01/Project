import PatientHeader from "../components/PatientHeader";
import PatientNavbar from "../components/PatientNavbar";
import PatientFooter from "../components/PatientFooter";
import React from 'react'

export default function PatientDashboard() {
  return (
    <div>
        <PatientNavbar />
        <PatientHeader/>
        <PatientFooter/>
    </div>
  )
}
