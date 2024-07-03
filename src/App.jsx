import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings'
import viewAllJobs from './components/viewAllJobs'

const App = () => {
  return (
   <>
    <Navbar />

   <Hero />
   <HomeCards />
   <JobListings />

    <viewAllJobs />

    
    

   </>
  )
}

export default App
