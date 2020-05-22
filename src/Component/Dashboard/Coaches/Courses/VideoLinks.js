import React, { useState } from 'react';

const VideoLinks = (props) => {
  const [values, setValues] = useState({ val: [] });

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <input
          type='text'
          value={el || ''}
          placeholder='Video Links'
          onChange={handleChange.bind(i)}
        />
        <span onClick={removeClick.bind(i)}> remove </span>
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

      <div></div>
    </form>
  );
};

export default VideoLinks;
