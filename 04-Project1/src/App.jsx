import React from 'react'
import './index.css'
import Card from './components/Card'

const jobOpening = [
  {
    id: 1,
    company: "Amazon",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "₹40k/month",
    logo: "https://logo.clearbit.com/amazon.com",
    location: "Remote"
  },
  {
    id: 2,
    company: "Google",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "₹80k/month",
    logo: "https://logo.clearbit.com/google.com",
    location: "Bangalore"
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Backend Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "₹90k/month",
    logo: "https://logo.clearbit.com/microsoft.com",
    location: "Hyderabad"
  },
  {
    id: 4,
    company: "Flipkart",
    role: "UI Designer",
    type: "Part Time",
    level: "Junior Level",
    salary: "₹25k/month",
    logo: "https://logo.clearbit.com/flipkart.com",
    location: "Remote"
  },
  {
    id: 5,
    company: "Zomato",
    role: "Product Designer",
    type: "Full Time",
    level: "Mid Level",
    salary: "₹60k/month",
    logo: "https://logo.clearbit.com/zomato.com",
    location: "Delhi"
  },
  {
    id: 6,
    company: "Swiggy",
    role: "UX Researcher",
    type: "Full Time",
    level: "Mid Level",
    salary: "₹55k/month",
    logo: "https://logo.clearbit.com/swiggy.com",
    location: "Bangalore"
  },
  {
    id: 7,
    company: "TCS",
    role: "React Developer",
    type: "Full Time",
    level: "Entry Level",
    salary: "₹30k/month",
    logo: "https://logo.clearbit.com/tcs.com",
    location: "Pune"
  },
  {
    id: 8,
    company: "Infosys",
    role: "Software Engineer",
    type: "Full Time",
    level: "Entry Level",
    salary: "₹28k/month",
    logo: "https://logo.clearbit.com/infosys.com",
    location: "Chennai"
  },
  {
    id: 9,
    company: "Adobe",
    role: "UI/UX Designer",
    type: "Contract",
    level: "Senior Level",
    salary: "₹75k/month",
    logo: "https://logo.clearbit.com/adobe.com",
    location: "Remote"
  },
  {
    id: 10,
    company: "Paytm",
    role: "Frontend Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "₹50k/month",
    logo: "https://logo.clearbit.com/paytm.com",
    location: "Noida"
  }
];

const App = () => {
  return (
    <div className="parent">
    {jobOpening.map(function(elem){
          return <Card clogo = {elem.logo} company = {elem.company}/>
    })}
      
    </div>
  )
}

export default App