import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { connect } from 'react-redux';
import { addCourse, addTopics } from '../../../../actions/course';
import Progress2 from '../../ProfileSettings/Progress';
import { withRouter } from 'react-router-dom';
import TagsInput from './Tags';
import DynamicInput from './DynamicInput';
import DynamicUpload from './DynamicUpload';
import DynamicDocLinks from './DynamicDocLinks';
import UploadVideo from './UploadVideo';
import VideoLinks from './VideoLinks';

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
    time_zone: '',
    course_type: 'fullcourse',
    videolinks: [],
    videos: [],
    levelofexpertise: '',
  });
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Add Logo');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [team, setTeamMember] = useState({ members: [] });
  const [topics, setTopics] = useState({ topics: [] });
  const [documents, setDocuments] = useState({ docs: [] });
  const [documentlinks, setDocumentsLinks] = useState({ links: [] });
  const [videos, setVideos] = useState({ vids: [] });
  const [videolinks, setvideoLinks] = useState({ vlinks: [] });

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
    category,
    time_zone,
    levelofexpertise,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log(category);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const selectedTags = (tags) => {
    setTopics({ topics: tags });
  };

  const memberValues = (values) => {
    setTeamMember({ members: values.val });
    console.log(team.members);
  };

  const documentSet = (values) => {
    setDocuments({ docs: values.val });
    console.log(documents.docs);
  };
  const linksSet = (values) => {
    setDocumentsLinks({ links: values.val });
  };
  const videoSet = (values) => {
    setVideos({ vids: values.val });
    console.log(videos.vids);
  };
  const VidLinksSet = (values) => {
    setvideoLinks({ vlinks: values.val });
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
    formDataImg.append('category', category);
    formDataImg.append('time_zone', time_zone);
    formDataImg.append('topics', JSON.stringify(topics.topics));
    formDataImg.append('member_name', JSON.stringify(team.members));
    formDataImg.append('documentlinks', JSON.stringify(documentlinks.links));
    formDataImg.append('videolinks', JSON.stringify(videolinks.vlinks));
    formDataImg.append('documents', documents.docs);
    formDataImg.append('videos', videos.vids);
    formDataImg.append('levelofexpertise', levelofexpertise);
    // videos.vids.forEach((vid) => {
    //   formDataImg.append('videos', vid);
    // });

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
    addCourse(formDataImg, config);

    console.log(formData);
  };  
  
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Course Details' back='Back to Course' />
          <div class='full_row create_course_form_section'>
            <div class='dashboard_center'>
              <div class='center_form'>
                <div class='full_row create_course_form'>
                  <div class='full_row flex_r_j_between_align_center course_creation_flow'>
                    <div class='flow_circle flow_circle1'></div>
                    <div class='flow_line'></div>
                    <div class='flow_circle flow_circle2'></div>
                    <div class='flow_line'></div>
                    <div class='flow_circle flow_circle3'></div>
                  </div>

                  <div class='courseCreation_step_one'>
                    <div class='full_row service_section'>
                      <div class='full_row header'>
                        <p>Course Category</p>
                      </div>
                      <div class='full_row servive_type'>
                        <div class='flex_r_wrap servive_type_options'>
                          <div>
                            <input
                              type='radio'
                              name='category'
                              value='Marketing'
                              id='marketing'
                              onChange={(e) => onChange(e)}
                            />
                            <label for="marketing">Marketing</label>
                          </div>
                          <div>
                            <input
                              type='radio'
                              name='category'
                              value='Design'
                              id='design'
                              onChange={(e) => onChange(e)}
                            />
                            <label for='design'>Design</label>
                          </div>
                          <div class='active'>
                            <input
                              type='radio'
                              name='category'
                              value='Software Development'
                              id='softwaredevelopment'
                              onChange={(e) => onChange(e)}
                            />
                            <label for='softwaredevelopment'>Software Development</label>
                          </div>
                          <div>
                            <input
                              type='radio'
                              name='category'
                              value='Creative'
                              id='creative'
                              onChange={(e) => onChange(e)}
                            />
                            <label for='creative'>Creative</label>
                          </div>
                          <div>
                            <input
                              type='radio'
                              name='category'
                              value='Data Science'
                              id='datascience'
                              onChange={(e) => onChange(e)}
                            />
                            <label for='datascience'>Data Science</label>
                          </div>
                          <div>
                            <input
                              type='radio'
                              name='category'
                              value='Product Development'
                              id='productdevelopment'
                              onChange={(e) => onChange(e)}
                            />
                            <label for='productdevelopment'>Product Development</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='full_row about_the_course'>
                    <div class='courseCreation_step_one'>
                      <div class='full_row header'>
                        <p>About the cousre</p>
                      </div>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='title'
                          placeholder='Course Name'
                          value={title}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <div class='common_input_wrapper_2'>
                        <div class='custum_file_input'>
                          <div class='flex_r_a_center input_file_dummy'>
                            <div class='file_btn'>Upload</div>
                            <div class='file_input_label'>
                              <span>{filename}</span>
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
                        <Progress2 percentage={uploadPercentage} />
                      ) : (
                        ''
                      )}

                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='youtube_video_link'
                          placeholder='Course Video Link'
                          value={youtube_video_link}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>

                      <div class='common_input_wrapper_2'>
                        <select
                          name='levelofexpertise'
                          id='levelofexpertise'
                          onChange={(e) => onChange(e)}
                          class='search_select search_select2'
                        >
                          <option> Level of expertise </option>
                          <option value='Beginner'> Beginner </option>
                          <option value='Intermediate'> Intermediate </option>
                          <option value='Expert'> Expert </option>
                        </select>
                      </div>

                      <div class='flex_r_j_end_align_center form_buttons'>
                        <button class='black_btn' id='goToStepTwo'>
                          Next
                        </button>
                      </div>
                    </div>

                    <div class='courseCreation_step_two'>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='course_duration'
                          placeholder='Course Duration (in weeks)'
                          value={course_duration}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>

                      <div class='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='price'
                          placeholder='Price'
                          value={price}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>

                      <div class='common_input_wrapper_2'>
                        <input
                          type='number'
                          name='no_of_student'
                          placeholder='Number of student'
                          value={no_of_student}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>

                      <div class='common_input_wrapper_2'>
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

                      <div class='common_input_wrapper_2'>
                        <textarea
                          name='course_description'
                          cols='10'
                          rows='5'
                          placeholder='Full Course description'
                          value={course_description}
                          onChange={(e) => onChange(e)}
                          required
                        ></textarea>
                      </div>

                      <div class='full_row'>
                        <div>
                          <div>
                            <div>
                              <div class='full_row header header2'>
                                <p>Topics Covered</p>
                              </div>
                              <div class='common_input_wrapper_2'>
                                <TagsInput
                                  selectedTags={selectedTags}
                                  tags={topics ? [...topics.topics] : []}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
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
                                <option value='Google Meet'>Google Meet</option>
                                <option value='Webex '> Webex </option>
                                <option value='Microsoft Teams'>
                                  Microsoft Teams
                                </option>
                                <option value='Skype'> Skype </option>
                                <option value='Bitpaper '> Bitpaper </option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <div class='full_row header header2'>
                              <p>Add Team Members</p>
                            </div>
                            <div class='file_input_wrapper'>
                              <div class='course_link' id=''>
                                <div class='common_input_wrapper_2'>
                                  <DynamicInput
                                    memberValues={memberValues}
                                    members={team.members && [...team.members]}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='flex_r_j_end_align_center form_buttons'>
                        <button class='grey_btn' id='backToStepOne'>
                          Back
                        </button>
                        <button class='black_btn' id='goToStepThree'>
                          Next
                        </button>
                      </div>
                    </div>

                    <div class='courseCreation_step_three'>
                      <div class='full_row'>
                        <div>
                          <div class='full_row header header2'>
                            <p>Course Documents / Links</p>
                          </div>
                          <div class='file_input_wrapper'>
                            <div class='flex_r_a_center course_navigator'>
                              <div class='active' id='docs_form_button'>
                                <span>Documents</span>
                              </div>
                              <div id='link_form_button'>
                                <span>Links</span>
                              </div>
                            </div>
                            <div class='course_docs' id='course_docs_form'>
                              <div class='common_input_wrapper_2'>
                                <DynamicUpload
                                  documentSet={documentSet}
                                  docsupload={
                                    documents.docs && [...documents.docs]
                                  }
                                />
                              </div>
                            </div>
                            <div class='course_link' id='course_links_form'>
                              <div class='common_input_wrapper_2'>
                                <DynamicDocLinks
                                  linksSet={linksSet}
                                  doclinks={
                                    documentlinks.links && [
                                      ...documentlinks.links,
                                    ]
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class='full_row header header2'>
                            <p>Course Videos</p>
                          </div>

                          <div class='file_input_wrapper'>
                            <div class='flex_r_a_center course_navigator'>
                              <div class='active' id='video_form_button'>
                                <span>Videos</span>
                              </div>
                              <div id='video_link_form_button'>
                                <span>Links</span>
                              </div>
                            </div>
                            <div class='course_docs' id='video_file_form'>
                              <div class='common_input_wrapper_2'>
                                <UploadVideo
                                  videoSet={videoSet}
                                  vidupload={videos.vids && [...videos.vids]}
                                />
                              </div>
                            </div>
                            <div class='course_link' id='video_links_form'>
                              <div class='common_input_wrapper_2'>
                                <VideoLinks
                                  VidLinksSet={VidLinksSet}
                                  vidlinks={
                                    videolinks.vlinks && [...videolinks.vlinks]
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='full_row'>
                        <div class='label'>
                          <p>Start Date</p>
                        </div>
                        <div class='common_input_wrapper_2'>
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
                      <div class='full_row'>
                        <div class='flex_r_a_center time'>
                          <div class='label'>
                            <p>Time</p>
                          </div>
                          <div class='common_input_wrapper_2'>
                            <select
                              name='from_time'
                              value={from_time}
                              onChange={(e) => onChange(e)}
                              class='search_select search_select2'
                            >
                              <option value='00:00'> 00:00 </option>
                              <option value='01:00'> 01:00 </option>
                              <option value='02:00'> 02:00 </option>
                              <option value='03:00'> 03:00 </option>
                              <option value='04:00 '> 04:00 </option>
                              <option value='05:00 '> 05:00 </option>
                              <option value='06:00'> 06:00 </option>
                              <option value='07:00'> 07:00 </option>
                              <option value='08:00'> 08:00 </option>
                              <option value='09:00'> 09:00 </option>
                              <option value='10:00'> 10:00 </option>
                              <option value='11:00'> 11:00 </option>
                              <option value='12:00'> 12:00 </option>
                              <option value='13:00'> 13:00 </option>
                              <option value='14:00'> 14:00 </option>
                              <option value='15:00'> 15:00 </option>
                              <option value='16:00'> 16:00 </option>
                              <option value='17:00'> 17:00 </option>
                              <option value='18:00'> 18:00 </option>
                              <option value='19:00'> 19:00 </option>
                              <option value='20:00'> 20:00 </option>
                              <option value='21:00'> 21:00 </option>
                              <option value='22:00'> 22:00 </option>
                              <option value='23:00'> 23:00 </option>
                              <option value='24:00'> 24:00 </option>
                            </select>
                          </div>
                        </div>
                        <div class='flex_r_a_center to'>
                          <div class='label'>
                            <p>To</p>
                          </div>
                          <div class='common_input_wrapper_2'>
                            <select
                              name='to_time'
                              value={to_time}
                              onChange={(e) => onChange(e)}
                              class='search_select search_select2'
                            >
                              <option value='00:00'> 00:00 </option>
                              <option value='01:00'> 01:00 </option>
                              <option value='02:00'> 02:00 </option>
                              <option value='03:00'> 03:00 </option>
                              <option value='04:00 '> 04:00 </option>
                              <option value='05:00 '> 05:00 </option>
                              <option value='06:00'> 06:00 </option>
                              <option value='07:00'> 07:00 </option>
                              <option value='08:00'> 08:00 </option>
                              <option value='09:00'> 09:00 </option>
                              <option value='10:00'> 10:00 </option>
                              <option value='11:00'> 11:00 </option>
                              <option value='12:00'> 12:00 </option>
                              <option value='13:00'> 13:00 </option>
                              <option value='14:00'> 14:00 </option>
                              <option value='15:00'> 15:00 </option>
                              <option value='16:00'> 16:00 </option>
                              <option value='17:00'> 17:00 </option>
                              <option value='18:00'> 18:00 </option>
                              <option value='19:00'> 19:00 </option>
                              <option value='20:00'> 20:00 </option>
                              <option value='21:00'> 21:00 </option>
                              <option value='22:00'> 22:00 </option>
                              <option value='23:00'> 23:00 </option>
                              <option value='24:00'> 24:00 </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class='full_row'>
                        <div class='flex_r_a_center left'>
                          <div class='label'>
                            <p>Time Zone</p>
                          </div>
                          <div class='common_input_wrapper_2'>
                            <select
                              name='time_zone'
                              onChange={(e) => onChange(e)}
                              class='search_select search_select2'
                            >
                              <option value=''>
                                (+01:00) West Central Africa
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class='flex_r_j_end_align_center form_buttons'>
                        <button class='grey_btn' id='backToStepOTwo'>
                          back
                        </button>
                        <button
                          className='black_btn'
                          onClick={(e) => {
                            onSubmit(e);
                          }}
                        >
                          finish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  addTopics: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  courses: state.courses,
});

export default connect(mapStateToProps, { addCourse, addTopics })(
  withRouter(CreateCourse)
);
