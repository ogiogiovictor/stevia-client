import React, { useState, Fragment } from 'react';
import './tab.css';

const DynamicUpload = (props) => {
  const [values, setValues] = useState({ val: props.docsupload });

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <div class='input-group'>
          <div class='custum_file_input'>
            <div class='flex_r_a_center input_file_dummy'>
              <div class='file_btn'>Upload</div>
              <div class='file_input_label'>
                <span>{el ? el.name : 'Add Document'}</span>
              </div>
            </div>

            <input
              type='file'
              className='form-control'
              placeholder='Add Document'
              onChange={handleChange.bind(i)}
            />
          </div>
          <div class='input-group-prepend'>
            <span onClick={() => removeClick(i)}>
              <i className='far fa-times-circle'></i> remove
            </span>
          </div>
        </div>
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.files[0];
    setValues({ val: vals });
    props.documentSet({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ''] });
  };

  const removeClick = (i) => {
    let vals = [...values.val.filter((_, index) => index !== i)];
    setValues({ val: vals });
    props.documentSet({ val: vals });
  };

  return (
    <Fragment>
      <div class='file_input_wrapper'>
        <div class='course_link' id=''>
          <div class='common_input_wrapper_2'>{createInputs()}</div>
          <div class='full_row text-right addMore_course_documents'>
            <span onClick={addClick}> Add </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DynamicUpload;
