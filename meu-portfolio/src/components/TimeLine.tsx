import React from 'react';
import { useState } from 'react';

function TimeLine() {
  const [timeline, setTimeline] = useState([
    {
      year: 2020,
      description: 'Descrição do ano 2020',
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center">
      {timeline.map((item) => (
        <div key={item.year}>
          <h2 className="text-2xl text-gray-300 font-bold">{item.year}</h2>
          <p className="text-xl text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TimeLine;