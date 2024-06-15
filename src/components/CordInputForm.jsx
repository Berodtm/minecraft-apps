import React, { useState } from 'react';
import Inputfield from './CordInputs';

function CordInputForm() {
  console.log('CordInputForm Rendered');
  const [formData, setFormData] = useState({
    netherX: 0,
    netherY: 0,
    netherZ: 0,
    overworldX: 0,
    overworldY: 0,
    overworldZ: 0,
  });
  console.log('form data rendered: ', formData);
  function handleChange(e) {
    const { name, value } = e.target;
    let intValue = Math.round(value); // Ensure input is treated as integer
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(`handleChange fired - Name: ${name}, Value: ${value}`);
    if (name === 'netherX') {
      console.log('if statement fired is equal to NX');
      setFormData((prev) => ({
        ...prev,
        [name]: intValue, // Store the rounded integer
        overworldX: Math.round(intValue * 8), // Convert and round
      }));
    } else if (name === 'netherY') {
      console.log('if statement fired is equal to NY');
      setFormData((prev) => ({
        ...prev,
        [name]: intValue,
        overworldY: Math.round(intValue),
      }));
    } else if (name === 'netherZ') {
      console.log('if statement fired is equal to NZ');
      setFormData((prev) => ({
        ...prev,
        [name]: intValue,
        overworldZ: Math.round(intValue * 8),
      }));
    } else if (name === 'overworldX') {
      console.log('if statement fired is equal to OX');
      setFormData((prev) => ({
        ...prev,
        [name]: intValue,
        netherX: Math.round(intValue / 8),
      }));
    } else if (name === 'overworldY') {
      console.log('if statement fired is equal to OY');
      setFormData((prev) => ({
        ...prev,
        [name]: intValue,
        netherY: Math.round(intValue),
      }));
    } else if (name === 'overworldZ') {
      setFormData((prev) => ({
        ...prev,
        [name]: intValue,
        netherZ: Math.round(intValue / 8),
      }));
    } else {
      // For any other inputs, just round the value
      setFormData((prev) => ({
        ...prev,
        [name]: intValue,
      }));
    }
  }
  function handleFocus(e) {
    const { name } = e.target;
    console.log('handleBlurr fired');
    e.target.value = '';
    // setFormData((prev) => ({ ...prev, [name]: '' }));
  }
  function handleBlur(e) {
    const { name } = e.target;
    console.log('handleBlur fired', name);
    // If the user leaves the input blank, revert to the previous state value
    if (e.target.value === '') {
      e.target.value = formData[name];
    }
  }


  return (
    <>
      <div className='bg-blue-950 text-white text-lg font-bold py-4 px-6 shadow-md'>
        <h1>Rob's Minecraft Coordinate Converter</h1>
      </div>
      <div className="bg-blue-50 overflow-auto p-4 shadow items-stretch">
      <p className='font-bold'>Enter the Overworld or Nether Coordinates to calculate the portal location.</p>
      </div>
      
      <form className='bg-slate-300  grid grid-cols-2 gap-4 p-4'>
        
          
        {/* Left column for inputs */}
        <div className="bg-blue-50 overflow-auto p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Enter Coordinates</h2>
            {Object.keys(formData).map((key) => (
                <div className="mb-3" key={key}>
                    <Inputfield
                        htmlFor={key}
                        name={key}
                        placeholder={`Enter ${key}`}
                        onChange={handleChange}
                        value={formData[key]}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-duration-200 ease-in-out"
                    />
                </div>
          ))}
        </div>
        <div>
          {' '}
          {/* Right column for outputs */}
          <div className='bg-green-700 font-bold text-white p-5 rounded-lg shadow-lg text-center flex flex-col justify-center'>
            <h2 className='text-lg font-semibold text-center mb-4'>Coordinates</h2>
            <h3 className='text-xl font-bold mb-2'>Nether </h3>
            <p className='text-lg mb-4 font-bold'>
              X: {formData.netherX} <br />Y: {formData.netherY} <br /> Z: {formData.netherZ}
            </p>
            <h3 className='text-xl font-bold mb-2'>Overworld </h3>
            <p className='text-lg'>
              X: {formData.overworldX} <br/> Y: {formData.overworldY} <br /> Z: {formData.overworldZ}
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default CordInputForm;
