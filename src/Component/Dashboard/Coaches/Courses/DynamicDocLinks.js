import React, { useState } from 'react';

const DynamicDocLinks = (props) => {

    const [values, setValues] = useState({ val: []});

      function createInputs() {
        return values.val.map((el, i) =>
          <div key={i}>
            <input type="text" value={el||''} placeholder='Document Links' onChange={handleChange.bind(i)} />
            <span onClick={removeClick.bind(i)}> remove </span>
          </div>
        );
      }

    function handleChange(event) {
      let vals = [...values.val];
      vals[this] = event.target.value;
      setValues({ val: vals });
      props.linksSet({ val: vals });
    }

    const addClick = () => {
      setValues({ val: [...values.val, '']})
    }

    const removeClick = () => {
      let vals = [...values.val];
      vals.splice(this,1);
      setValues({ val: vals });
    }

    // const handleSubmit = event => {
    //   const formData = new FormData();
    //   formData.append('coach_id', course && course[0].coach_id);
    //   formData.append('course_id', course && course[0].id);
    //   formData.append('member_name', JSON.stringify(values.val.join(', ')));
    //   addTeamMembers(formData)
    //   event.preventDefault();
    // }

    return (
      <form>
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
              {/* <button className='black_btn' onClick={handleSubmit}>
                Save
              </button> */}
            </div>
      </form>
    );

}

export default DynamicDocLinks;
