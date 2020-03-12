import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Progress from '../../ProfileSettings/Progress';
import { addVideos } from '../../../../actions/course';
import { connect } from 'react-redux';

const CourseDetailsItem = ({
  course: { id, price_per_session, coach_id, image, course_description, title }, addVideos
}) => {
  const [file, setFile] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const handleFile = e => {
    setFile(e.target.files);
  };
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('coursevideo', file);
    formData.append('coach_id', coach_id);
    formData.append('course_id', id);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      onUploadProgress: ProgressEvent => {
        setUploadPercentage(
          parseInt(Math.round(ProgressEvent.loaded * 100) / ProgressEvent.total)
        );

        setTimeout(() => {
          setUploadPercentage(0);
        }, 10000);
      }
    };
    console.log(formData);
    addVideos(formData, config);
  };
  return (
    <Fragment>
      <div className='full_row flex_r course_banner_wrapper'>
        <div className='image'>
          <img src={image} alt='' />
        </div>
        <div className='details'>
          <div className='full_row title'>
            <p> {title} </p>
            <br />
            <p>
              <a href='#add-video-modal'>
                <button class='red_btn'>Add Videos</button>
              </a>{' '}
              <a href='#add-documents-modal'>
              <button class='red_btn'>Add Documents</button>{' '}
              </a>
              <button class='red_btn'>View</button>
            </p>
          </div>
          <div className='flex_r Description_n_price'>
            <div className='description'>
              <div className='full_row top'>
                <p>{course_description}</p>
              </div>
              <div className='image_n_seat'>
                <div className='flex_r_j_between_align_center'>
                  <div className='stud_images'>
                    <img src='../utils/images/40.png' alt='' />
                    <img src='../utils/images/41.png' alt='' />
                    <img src='../utils/images/42.png' alt='' />
                    <img src='../utils/images/43.png' alt='' />
                    <img src='../utils/images/44.png' alt='' />
                  </div>
                  <div>
                    <p> 8 Seats left </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='price'>
              <h6> Price </h6>
              <p> ₦ {price_per_session} </p>
            </div>
          </div>
        </div>
      </div>
      <div className='add-service-modal' id='add-video-modal'>
        <div>
          <div className='full_row head'>
            <h4> Upload Videos </h4>
          </div>
          <form onSubmit={e => onSubmit(e)}>
            <div className='full_row comm_channel'>
              <div className='full_row header'></div>
              <div className='full_row comm_channel_type'>
                <div className='flex_r_wrap comm_channel_options'>
                  <div className='form-check'>
                    <input
                      type='file'
                      name='coursevideo'
                      id='coursevideo'
                      onChange={handleFile}
                      multiple
                      required
                    />
                  </div>
                  {uploadPercentage > 0 ? (
                      <Progress percentage={uploadPercentage} />
                    ) : (
                      ''
                    )}
                </div>
                <div><p>No Videos Added</p></div>
              </div>
            </div>
            <div className='flex_r_j_end_align_center footer_button'>
              <div>
                <a href='#overview_cards'>
                  <button type='button' className='grey_btn'>
                    Close
                  </button>
                </a>
              </div>
              <div>
                <button type='submit' className='black_btn'>
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='add-service-modal' id='add-documents-modal'>
        <div>
          <div className='full_row head'>
            <h4> Upload Documents </h4>
          </div>
          <form onSubmit=''>
            <input name='coach_id' type='hidden' value={''} onChange={''} />
            <div className='full_row comm_channel'>
              <div className='full_row header'></div>
              <div className='full_row comm_channel_type'>
                <div className='flex_r_wrap comm_channel_options'>
                  <div className='form-check'>
                    <input
                      type='file'
                      name='documents'
                      id='documents'
                      onChange={''}
                      multiple
                      required
                    />
                  </div>
                </div>
                <div><p>No Documents Added</p></div>
              </div>
            </div>
            <div className='flex_r_j_end_align_center footer_button'>
              <div>
                <a href='#overview_cards'>
                  <button type='button' className='grey_btn'>
                    Close
                  </button>
                </a>
              </div>
              <div>
                <button type='submit' className='black_btn'>
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CourseDetailsItem.propTypes = {
  course: PropTypes.object.isRequired,
  addVideos: PropTypes.func.isRequired
};

export default connect(null, {addVideos})(CourseDetailsItem);
