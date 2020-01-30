import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}> {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
