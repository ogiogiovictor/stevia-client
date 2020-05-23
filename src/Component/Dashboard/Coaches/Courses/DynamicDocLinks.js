import React, { useState } from 'react';

const DynamicDocLinks = (props) => {
  const [values, setValues] = useState({ val: props.doclinks });

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <div class='input-group'>
          <input
            type='text'
            value={el || ''}
            className='form-control'
            placeholder='Document Links'
            onChange={handleChange.bind(i)}
          />
          <div class='input-group-prepend'>
            <span onClick={() => removeClick(i)}>
              <i className='far fa-times-circle'></i>
            </span>
          </div>
        </div>
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
    props.linksSet({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ''] });
  };

  const removeClick = (i) => {
    let vals = [...values.val.filter((_, index) => index !== i)];
    setValues({ val: vals });
    props.linksSet({ val: vals });
  };

  return (
    <form>
      <div class='file_input_wrapper'>
        <div class='course_link' id=''>
          <div class='common_input_wrapper_2'>{createInputs()}</div>
          <div class='full_row text-right addMore_course_documents'>
            <span onClick={addClick}> Add </span>
          </div>
        </div>
      </div>

      <div>
        {/* <button className='black_btn' onClick={handleSubmit}>
                Save
              </button> */}
      </div>
    </form>
  );
};

export default DynamicDocLinks;
