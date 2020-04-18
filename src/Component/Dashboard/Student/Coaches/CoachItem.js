import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const CoachItem = ({ 
    loading,
    coach: {
        id,
        firstname,
        lastname,
        profile
    }
 }) => {

  const { search } = window.location;
  const availerror = new URLSearchParams(search).get('availerror');

  useEffect(() => {
    if(availerror === '1'){
      const tmsg = `${firstname} ${lastname} is not available`;
      const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: tmsg
      })
  
  }
  }, [firstname, lastname, availerror])

  return loading ? <Spinner /> : (
      <Fragment>
          <div className='flex_r each_coach'>
                        <div className='coach_image'>
                          <img
                            src={profile && profile.image}
                            alt=''
                          />
                        </div>
                        <div className='flex_c_j_between coach_features'>
                          <div className='full_row coach_features_top'>
                            <div className='full_row coach_name'>
                              <h5>{firstname} {lastname}</h5>
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
                              <Link to={`./coaches/${id}`}>
                                {' '}
                                View Profile{' '}
                              </Link>
                            </div>
                            <div>
                              <Link to={`./coaches/book/${id}`}><button className='black_btn'>Book</button></Link>
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
