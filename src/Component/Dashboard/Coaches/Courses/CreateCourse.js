import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { connect } from 'react-redux';
import { addCourse } from '../../../../actions/course';
import Progress from '../../ProfileSettings/Progress';
import { withRouter } from 'react-router-dom';

const CreateCourse = ({ user, addCourse }) => {
  const [formData, setFormData] = useState({
    coach_id: '',
    category: '',
    title: '',
    no_of_student: '',
    course_description: '',
    price: '',
    medium_of_communication: '',
    date: '',
    from_time: '',
    to_time: '',
    course_duration: '',
    brief_description: '',
    youtube_video_link: '',
    course_type: 'fullcourse',
  });
  const [file, setFile] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const {
    title,
    no_of_student,
    course_description,
    date,
    from_time,
    to_time,
    course_duration,
    brief_description,
    youtube_video_link,
    course_type,
    price,
    medium_of_communication,
    category
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formDataImg = new FormData();
    formDataImg.append('image', file);
    formDataImg.append('title', title);
    formDataImg.append('no_of_student', no_of_student);
    formDataImg.append('course_description', course_description);
    formDataImg.append('date', date);
    formDataImg.append('from_time', from_time);
    formDataImg.append('to_time', to_time);
    formDataImg.append('course_duration', course_duration);
    formDataImg.append('brief_description', brief_description);
    formDataImg.append('youtube_video_link', youtube_video_link);
    formDataImg.append('course_type', course_type);
    formDataImg.append('price', price);
    formDataImg.append('medium_of_communication', medium_of_communication);
    formDataImg.append('coach_id', user && user.currentUser.id);
    formDataImg.append('category', user && category);

    console.log(formData);

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
    console.log(formDataImg);
    addCourse(formDataImg, config);
  };

  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Course Details' back='Back to Course' />
          <div className='full_row create_course_form_section'>
            <div className='dashboard_center'>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='full_row create_course_form'>
                  <div class='full_row service_section'>
                    <div class='full_row header'>
                      <p>Course Category</p>
                    </div>
                    <div class='full_row signup_option flex_r_wrap'>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label htmlFor='marketing'>
                            <input
                              type='radio'
                              name='category'
                              value='marketing'
                              id='marketing'
                              onChange={(e) => onChange(e)}
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class='notification_label'>
                          <p>Marketing</p>
                        </div>
                      </div>

                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label htmlFor='design'>
                            <input
                              type='radio'
                              name='category'
                              value='design'
                              id='design'
                              onChange={(e) => onChange(e)}
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class='notification_label'>
                          <p>Design</p>
                        </div>
                      </div>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label htmlFor='softwaredevelopment'>
                            <input
                              type='radio'
                              name='category'
                              value='Software Development'
                              id='softwaredevelopment'
                              onChange={(e) => onChange(e)}
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class='notification_label'>
                          <p>Software Development</p>
                        </div>
                      </div>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label htmlFor='creative'>
                            <input
                              type='radio'
                              name='category'
                              value='Creative'
                              id='creative'
                              onChange={(e) => onChange(e)}
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class='notification_label'>
                          <p>Creative</p>
                        </div>
                      </div>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label htmlFor='datascience'>
                            <input
                              type='radio'
                              name='category'
                              value='Data Science'
                              id='datascience'
                              onChange={(e) => onChange(e)}
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class='notification_label'>
                          <p>Data Science</p>
                        </div>
                      </div>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label htmlFor='productdevelopment'>
                            <input
                              type='radio'
                              name='category'
                              value='Product Development'
                              id='productdevelopment'
                              onChange={(e) => onChange(e)}
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class='notification_label'>
                          <p>Product Development</p>
                        </div>
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
                        placeholder='Course Name'
                        value={title}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className='common_input_wrapper_2'>
                      <div class='custum_file_input'>
                        <div class='flex_r_a_center input_file_dummy'>
                          <div class='file_btn'>Upload</div>
                          <div class='file_input_label'>
                            <span>Add logo</span>
                          </div>
                        </div>
                        <input
                          type='file'
                          name='image'
                          id='image'
                          onChange={handleFile}
                          required
                        />
                      </div>
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
                          name='youtube_video_link'
                          placeholder='Course Youtube Video Link'
                          value={youtube_video_link}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='course_duration'
                          placeholder='Course Duration (in minutes)'
                          value={course_duration}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                    </div>
                    <div className='full_row cols-2'>
                      <div className='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='price'
                          placeholder='Price'
                          value={price}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='no_of_student'
                          placeholder='Number of student'
                          value={no_of_student}
                          onChange={(e) => onChange(e)}
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
                        onChange={(e) => onChange(e)}
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
                        onChange={(e) => onChange(e)}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <div class='full_row header header2'>
                        <p>Select Communication channel</p>
                      </div>

                      <div class='common_input_wrapper_2'>
                        <select
                          name='medium_of_communication'
                          id='medium_of_communication'
                          onChange={(e) => onChange(e)}
                          class='search_select search_select2'
                        >
                          <option> Communication Channel</option>
                          <option value='Zoom'> Zoom </option>
                          <option value='Google Meet'> Google Meet </option>
                          <option value='Webex '> Webex </option>
                          <option value='Microsoft Teams'>
                            ]Microsoft Teams
                          </option>
                          <option value='Skype'> Skype </option>
                          <option value='Bitpaper '> Bitpaper </option>
                        </select>
                      </div>
                    </div>
                    <div className='flex_r_j_between_align_center date_n_time'>
                      <div className='flex_r_a_center left'>
                        <div className='label'>
                          <p> Date </p>
                        </div>
                        <div className='common_input_wrapper_2'>
                          <input
                            type='date'
                            name='date'
                            value={date}
                            placeholder='MM / DD / YY'
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className='flex_r_j_end_align_center right'>
                        <div className='flex_r_a_center time'>
                          <div className='label'>
                            <p> Time </p>
                          </div>
                          <div className='common_input_wrapper_2'>
                            <input
                              type='time'
                              name='from_time'
                              value={from_time}
                              placeholder='00:00 AM'
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </div>
                        </div>
                        <div className='flex_r_a_center to'>
                          <div className='label'>
                            <p> To </p>
                          </div>
                          <div className='common_input_wrapper_2'>
                            <input
                              type='time'
                              name='to_time'
                              value={to_time}
                              placeholder='00:00 AM'
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_j_end_align_center form_buttons'>
                      <button type='submit' className='black_btn'>
                        Continue
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
  addCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { addCourse })(
  withRouter(CreateCourse)
);
