import React from 'react';
import { useState } from 'react';

function DynamicInput() {

    const [values, setValues] = useState({ val: []});

      function createInputs() {
        return values.val.map((el, i) =>
          <div key={i}>
            <input type="text" value={el||''} placeholder='Members Name' onChange={handleChange.bind(i)} />
            <span onClick={removeClick.bind(i)}> remove </span>
          </div>
        );
      }

    function handleChange(event) {
      let vals = [...values.val];
      vals[this] = event.target.value;
      setValues({ val: vals });
    }

    const addClick = () => {
      setValues({ val: [...values.val, '']})
    }

    const removeClick = () => {
      let vals = [...values.val];
      vals.splice(this,1);
      setValues({ val: vals });
    }

    const handleSubmit = event => {
      alert('A name was submitted: ' + values.val.join(', '));
      event.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
          <div class='file_input_wrapper'>
                            <div class='course_link' id=''>
                              <div class='common_input_wrapper_2'>
                              {createInputs()}
                              </div>
                              <div class='full_row text-right addMore_course_documents'>
                                <span onClick={addClick}> Add </span>
                              </div>
                            </div>
                          </div>
        
                          <div>
              <button className='black_btn' onClick={handleSubmit}>
                Continue
              </button>
            </div>
      </form>
    );

}

export default DynamicInput;
