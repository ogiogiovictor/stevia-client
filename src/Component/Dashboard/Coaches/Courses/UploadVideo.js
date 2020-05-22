import React, { useState } from 'react';
import './tab.css';

const UploadVideo = (props) => {
  const [values, setValues] = useState({ val: [] });

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <div class='custum_file_input'>
          <div class='flex_r_a_center input_file_dummy'>
            <div class='file_btn'>Upload</div>
            <div class='file_input_label'>
              <span>Add Video</span>
            </div>
          </div>

          <input
            type='file'
            name='videos'
            value={el || ''}
            placeholder='Add Video'
            onChange={handleChange.bind(i)}
          />
        </div>

        <span onClick={removeClick.bind(i)}> remove </span>
      </div>
    ));
  }
  
  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
    props.videoSet({ val: vals });
  }


  const addClick = () => {
    setValues({ val: [...values.val, ''] });
  };

  const removeClick = () => {
    let vals = [...values.val];
    vals.splice(this, 1);
    setValues({ val: vals });
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
    </form>
  );
};

export default UploadVideo;
