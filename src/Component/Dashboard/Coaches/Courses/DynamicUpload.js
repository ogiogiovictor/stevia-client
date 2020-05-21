import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tab.css';
import { addDocuments } from '../../../../actions/course';
import Progress from '../../ProfileSettings/Progress';

const DynamicUpload = ({course}) => {
  const [values, setValues] = useState({ val: [] });
  // const [file, setFile] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <div class='custum_file_input'>
          <div class='flex_r_a_center input_file_dummy'>
            <div class='file_btn'>Upload</div>
            <div class='file_input_label'>
              <span>Add Document</span>
            </div>
          </div>

          <input
            type='file'
            value={el || ''}
            placeholder='Add Document'
            onChange={handleChange.bind(i)}
          />
        </div>
        {uploadPercentage > 0 ? (
                            <Progress percentage={uploadPercentage} />
                          ) : (
                            ''
                          )}

        <span onClick={removeClick.bind(i)}> remove </span>
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ''] });
  };

  const removeClick = () => {
    let vals = [...values.val];
    vals.splice(this, 1);
    setValues({ val: vals });
  };

  const handleSubmit = (event) => {
    const formData = new FormData();
      formData.append('coach_id', course && course[0].coach_id);
      formData.append('course_id', course && course[0].id);
      formData.append('file', JSON.stringify(values.val.join(', ')));

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        onUploadProgress: (ProgressEvent) => {
          setUploadPercentage(
            parseInt(Math.round(ProgressEvent.loaded * 100) / ProgressEvent.total)
          );
  
          setTimeout(() => {
            setUploadPercentage(0);
          }, 10000);
        },
      };
      addDocuments(formData, config);
      event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tabs>
        <TabList>
          <Tab>Documents</Tab>
          <Tab>Links</Tab>
        </TabList>
        <TabPanel>
          <div class='file_input_wrapper'>
            <div class='course_link' id=''>
              <div class='common_input_wrapper_2'>{createInputs()}</div>
              <div class='full_row text-right addMore_course_documents'>
                <span onClick={addClick}> Add </span>
              </div>
            </div>
          </div>

          <div>
            <button className='black_btn' onClick={handleSubmit}>
              Save
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </form>
  );
}

export default DynamicUpload;
