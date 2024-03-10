import { useEffect, useState } from 'react';

const infCard = ({ title, description }) => {
  return (
    <div className="card bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default infCard;
