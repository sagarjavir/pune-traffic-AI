import React from 'react'
import AccidentSummaryCard from '../components/accident/AccidentSummaryCard';

function AccidentPage() {
  return (
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">
             🧠 Accident Detection with AI
          </h1>
           <AccidentSummaryCard />
        </div>
  )
}

export default AccidentPage