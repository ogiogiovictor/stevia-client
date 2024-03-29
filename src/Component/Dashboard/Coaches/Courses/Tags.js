import React, { useState } from 'react';
import './topics.scss';

const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <div className='tags-input'>
      <ul id='tags'>
        {tags.map((tag, index) => (
          <li key={index} className='tag'>
            <span className='tag-title'>{tag}</span>
            <span className='tag-close-icon' onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <div class='common_input_wrapper_2'>
        <input
          type='text'
          onKeyUp={(event) => (event.key === ' ' ? addTags(event) : null)}
          placeholder='Enter topics covered in this course & press spacebar to add'
        />
      </div>
    </div>
  );
};

export default TagsInput;
