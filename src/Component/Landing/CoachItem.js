import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoachItem = ({ 
    loading,
    coach: {
        id,
        name,
        image
    }
 }) => {
  return loading ? <Spinner /> : (
      <Fragment>
          <div className='flex_r each_coach'>
                        <div className='coach_image'>
                          <img
                            src={image ? image : 'https://via.placeholder.com/150'}
                            alt=''
                          />
                        </div>
                        <div className='flex_c_j_between coach_features'>
                          <div className='full_row coach_features_top'>
                            <div className='full_row coach_name'>
                              <h5>{name}</h5>
                            </div>
                            <div className='full_row star_rating'>
                              <i className='fas fa-star'></i>
                              <i className='fas fa-star'></i>
                              <i className='fas fa-star'></i>
                              <i className='fas fa-star'></i>
                              <i className='far fa-star'></i>
                            </div>
                          </div>
                          <div className='full_row coach_features_middle'>
                            <p className='specialty_txt'>Specialty:</p>
                            <p>
                              Mid Career | Executives <br />
                              Career Changers <br />
                              Enterprenuership and more
                            </p>
                          </div>
                          <div className='flex_c full_row coach_features_bottom'>
                            <div className='bottom_link'>
                              <Link to={`./dashboard/student/coaches/${id}`}>
                                {' '}
                                View Profile{' '}
                              </Link>
                            </div>
                            <div>
                              <Link to={`./dashboard/student/coaches/book/${id}`}><button className='black_btn'>Book</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
      </Fragment>
  )
};

CoachItem.propTypes = {
  coach: PropTypes.object.isRequired
};

export default CoachItem;
