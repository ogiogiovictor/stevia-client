import React from 'react';

export const FormErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <div className={formErrors[fieldName] ? 'error' : ''} key={i}>
            {' '}
            {formErrors[fieldName]}
          </div>
        );
      } else {
        return '';
      }
    })}
  </div>
);
