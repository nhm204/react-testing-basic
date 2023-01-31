import React, { useEffect, useState } from 'react';
import { mockData } from '../constants/MockData';


const TestingStateChange = () => {
  const [ loaded, setLoaded ] = useState(false);
  const [ toggleTextVisible, setToggleTextVisible ] = useState(false);
  const [ btnDisabled, setBtnDisabled]  = useState(false);
  const [ elements, setElements ] = useState(mockData);

  useEffect(() => {
    setLoaded(true);
  }, []);


  return (
    <div>
      {loaded && <h3> Page Loaded </h3>}

      {toggleTextVisible && <p> Text visible </p> }
      <button disabled={btnDisabled} onClick={() => { setToggleTextVisible(!toggleTextVisible) }}> 
        Toggle text 
      </button>

      {/* Make the above button disabled */}
      <button onClick={() => { setBtnDisabled(!btnDisabled) }}> 
        Toggle button disabled 
      </button>


      <h3> List </h3>
      { elements.map(item => (
        <div key= {item.id} data-testid='record'>
          {item.id}: { item.name }
        </div>
      ))}

      {/* Add an element to a list */}
      <button onClick={() => {
        setElements([...elements, {
            id: 4,
            name: 'abhinav'
        }])
      }}> 
        Add to list 
      </button>

      {/* Remove an element from a list */}
      <button onClick={() => {
        setElements(elements.filter(item => item.id !== 2))
      }}> 
        Remove from list 
      </button>
    </div>
  );
}

export default TestingStateChange;