import React, { useState } from 'react';

const VideoLinks = (props) => {
  const [values, setValues] = useState({ val: props.vidlinks });

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <div class='input-group'>
          <input
            type='text'
            className='form-control'
            value={el || ''}
            placeholder='Video Links'
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
    props.VidLinksSet({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ''] });
  };

  const removeClick = (i) => {
    let vals = [...values.val.filter((_, index) => index !== i)];
    setValues({ val: vals });
    props.VidLinksSet({ val: vals });
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

      <div></div>
    </form>
  );
};

export default VideoLinks;
