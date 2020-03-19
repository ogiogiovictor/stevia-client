import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { connect } from 'react-redux';
import { getCoachServices } from '../../../../actions/service';
import { addCourse } from '../../../../actions/course';
import Spinner from '../../../Spinner/Spinner';
import Progress from '../../ProfileSettings/Progress';
import { withRouter } from 'react-router-dom';

const CreateCourse = ({
  user,
  getCoachServices,
  addCourse,
  services: { coachservices, loading, history }
}) => {
  const [formData, setFormData] = useState({
    coach_id: '',
    service_id: '',
    title: '',
    no_of_student: '',
    course_description: '',
    price_per_session: '',
    medium_of_communication: '',
    date: '',
    from_time: '',
    to_time: '',
    course_duration: '',
    brief_description: '',
    youtube_video_preview: '',
    course_type: ''
  });
  const [file, setFile] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const {
    service_id,
    title,
    no_of_student,
    course_description,
    date,
    from_time,
    to_time,
    course_duration,
    brief_description,
    youtube_video_preview,
    course_type
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    getCoachServices();
  }, [getCoachServices]);

  let selectedOption = 'Pick a Service';

  const findservice = coachservices.find(
    ({ id }) => id === parseInt(service_id)
  );

  const onSubmit = e => {
    e.preventDefault();
    const formDataImg = new FormData();
    formDataImg.append('image', file);
    formDataImg.append('service_id', service_id);
    formDataImg.append('title', title);
    formDataImg.append('no_of_student', no_of_student);
    formDataImg.append('course_description', course_description);
    formDataImg.append('date', date);
    formDataImg.append('from_time', from_time);
    formDataImg.append('to_time', to_time);
    formDataImg.append('course_duration', course_duration);
    formDataImg.append('brief_description', brief_description);
    formDataImg.append('youtube_video_preview', youtube_video_preview);
    formDataImg.append('course_type', course_type);
    formDataImg.append(
      'price_per_session',
      service_id && findservice.price_per_session
    );
    formDataImg.append(
      'medium_of_communication',
      service_id && findservice.medium_of_communication
    );
    formDataImg.append('coach_id', user && user.currentUser.id);

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
    addCourse(formDataImg, config, history);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Course Details' back='Back to Course' />
          <div className='full_row create_course_form_section'>
            <div className='dashboard_center'>
              <form onSubmit={e => onSubmit(e)}>
                <div className='full_row create_course_form'>
                  <div className='full_row service_section'>
                  <div className='full_row servive_type'>
                      <div className='common_input_wrapper_2'>
                        <select
                          name='course_type'
                          className='search_select search_select2'
                          onChange={e => onChange(e)}
                          required
                        >
                          <option selected>Select Type</option>
                          <option value='fullcourse'>Full Course</option>
                          <option value='appointment'>Appointment</option>
                        </select>
                      </div>
                    </div>
                    <div className='full_row header'>
                      <p>Select which service you want to book</p>
                    </div>
                    <div className='full_row servive_type'>
                      <div className='common_input_wrapper_2'>
                        <select
                          name='service_id'
                          className='search_select search_select2'
                          onChange={e => onChange(e)}
                          required
                        >
                          <option selected>{selectedOption}</option>
                          {coachservices.length > 0 ? (
                            coachservices.map(coachservice => (
                              <option
                                key={coachservice.id}
                                value={coachservice.id}
                              >
                                {coachservice.service[0].name}
                              </option>
                            ))
                          ) : (
                            <option>No Services Found...</option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='full_row about_the_course'>
                    <div className='full_row header'>
                      <p> About the course </p>
                    </div>
                    <div className='common_input_wrapper_2'>
                      <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={title}
                        onChange={e => onChange(e)}
                        required
                      />
                    </div>
                    <div className='common_input_wrapper_2'>
                      <input
                        type='file'
                        name='image'
                        id='image'
                        onChange={handleFile}
                        required
                      />
                    </div>
                    {uploadPercentage > 0 ? (
                      <Progress percentage={uploadPercentage} />
                    ) : (
                      ''
                    )}
                    <div class='full_row cols-2'>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='youtube_video_preview'
                          placeholder='Course Youtube Video Link'
                          value={youtube_video_preview}
                          onChange={e => onChange(e)}
                          required
                        />
                      </div>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='course_duration'
                          placeholder='Course Duration'
                          value={course_duration}
                          onChange={e => onChange(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className='full_row cols-2'>
                      <div className='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='price_per_session'
                          placeholder='Price per session'
                          value={findservice && findservice.price_per_session}
                          onChange={e => onChange(e)}
                          disabled
                          required
                        />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='no_of_student'
                          placeholder='Number of student'
                          value={no_of_student}
                          onChange={e => onChange(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className='common_input_wrapper_2'>
                      <textarea
                        name='brief_description'
                        cols='10'
                        rows='2'
                        placeholder='Brief Course description'
                        value={brief_description}
                        onChange={e => onChange(e)}
                        required
                      />
                    </div>
                    <div className='common_input_wrapper_2'>
                      <textarea
                        name='course_description'
                        cols='10'
                        rows='5'
                        placeholder='Course description'
                        value={course_description}
                        onChange={e => onChange(e)}
                        required
                      ></textarea>
                    </div>
                    <div className='common_input_wrapper_2'>
                      <input
                        type='text'
                        name='medium_of_communication'
                        placeholder='Medium of Communication'
                        value={
                          findservice && findservice.medium_of_communication
                        }
                        onChange={e => onChange(e)}
                        disabled
                        required
                      />
                    </div>
                    <div className='common_input_wrapper_2'>
                      <p> Topics Covered </p>
                    </div>
                    <div className='common_input_wrapper_2'>
                      <textarea
                        name=''
                        id=''
                        cols='10'
                        rows='2'
                        placeholder='Enter the topics covered in this course'
                      />
                    </div>
                    <div className='flex_r_j_between_align_center date_n_time'>
                      <div className='flex_r_a_center left'>
                        <div className='label'>
                          {' '}
                          <p> Date </p>{' '}
                        </div>
                        <div className='common_input_wrapper_2'>
                          <input
                            type='date'
                            name='date'
                            value={date}
                            placeholder='MM / DD / YY'
                            onChange={e => onChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className='flex_r_j_end_align_center right'>
                        <div className='flex_r_a_center time'>
                          <div className='label'>
                            {' '}
                            <p> Time </p>{' '}
                          </div>
                          <div className='common_input_wrapper_2'>
                            <input
                              type='time'
                              name='from_time'
                              value={from_time}
                              placeholder='00:00 AM'
                              onChange={e => onChange(e)}
                              required
                            />
                          </div>
                        </div>
                        <div className='flex_r_a_center to'>
                          <div className='label'>
                            {' '}
                            <p> To </p>{' '}
                          </div>
                          <div className='common_input_wrapper_2'>
                            <input
                              type='time'
                              name='to_time'
                              value={to_time}
                              placeholder='00:00 AM'
                              onChange={e => onChange(e)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_j_end_align_center form_buttons'>
                      <button type='submit' className='black_btn'>
                        {' '}
                        add{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

CreateCourse.propTypes = {
  user: PropTypes.object.isRequired,
  getCoachServices: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired,
  addCourse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  services: state.services,
  user: state.auth.user
});

export default connect(mapStateToProps, { getCoachServices, addCourse })(
  withRouter(CreateCourse)
);
