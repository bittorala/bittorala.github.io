import React from 'react';

const today = new Date();
const age = today.getFullYear() - 1997 - Number(today.getMonth() < 2 || today.getMonth() == 2 && today.getDate() < 25);

const AgeSpan = () => (
    <span>{age}</span>
);

export default AgeSpan;

