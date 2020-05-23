import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { connect } from 'react-redux';
import { addCourse, addTopics } from '../../../../actions/course';
import Progress2 from '../../ProfileSettings/Progress';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wizard, Steps, Step, Navigation, Progress } from 'react-wizr';
import TagsInput from './Tags';
import DynamicInput from './DynamicInput';
import DynamicUpload from './DynamicUpload';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tab.css';
import DynamicDocLinks from './DynamicDocLinks';
import UploadVideo from './UploadVideo';
import VideoLinks from './VideoLinks';

const CreateCourse = ({ user, addCourse }) => {
  const { formState } = useForm({
    mode: 'onChange',
  });

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
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const selectedTags = (tags) => {
    setTopics({ topics: tags });
  };

  const memberValues = (values) => {
    setTeamMember({ members: values.val });
  };

  const documentSet = (values) => {
    setDocuments({ docs: values.val });
    console.log(documents)
  };
  const linksSet = (values) => {
    setDocumentsLinks({ links: values.val });
  };
  const videoSet = (values) => {
    setVideos({ vids: values.val });
    console.log(videos)
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

  // const postSelectedTags = () => {
  //   const formData = new FormData();
  //   formData.append('coach_id', courses && courses[0].coach_id);
  //   formData.append('course_id', courses && courses[0].id);
  //   formData.append('topics', JSON.stringify(topics));
  //   addTopics(formData);
  // };

  const SimpleNavigation = () => (
    <Navigation
      render={({ activeStepIndex, goToNextStep, goToPrevStep, totalSteps }) => (
        <div className='flex_r_j_end_align_center btn'>
          {activeStepIndex === 0 && (
            <button
              className='black_btn'
              disabled={!formState.isValid}
              onClick={(e) => {
                // onSubmit(e);
                goToNextStep();
              }}
            >
              Continue
            </button>
          )}
          {activeStepIndex === 1 && (
            <div>
              <button className='grey_btn' onClick={goToPrevStep}>
                Go Back
              </button>
              <button
                className='black_btn'
                onClick={() => {
                  goToNextStep();
                }}
              >
                Continue
              </button>
            </div>
          )}
          {activeStepIndex === 2 && (
            <div>
              <button className='grey_btn' onClick={goToPrevStep}>
                Go Back
              </button>
              <button className='black_btn' onClick={goToNextStep}>
                Continue
              </button>
            </div>
          )}
          {activeStepIndex === 3 && (
            <div>
              <button className='grey_btn' onClick={goToPrevStep}>
                Go Back
              </button>
              <button className='black_btn' onClick={goToNextStep}>
                Continue
              </button>
            </div>
          )}
          {activeStepIndex === 4 && (
            <div>
              <button className='grey_btn' onClick={goToPrevStep}>
                Go Back
              </button>
              <button className='black_btn' onClick={goToNextStep}>
                Finish
              </button>
            </div>
          )}
        </div>
      )}
    />
  );

  const ProgressBar = () => (
    <Progress
      render={({ percentage }) => {
        const styles = {
          width: `${percentage}%`,
        };

        return (
          <div className='ProgressBar no-print'>
            <span className='ProgressBar-value' style={styles} />
          </div>
        );
      }}
    />
  );

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
                  <Wizard
                    onStepChanged={({ step }) =>
                      console.log(`Step changed: ${step.id}`)
                    }
                  >
                    <ProgressBar />

                    <Steps>
                      <Step id='first'>
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
                          <div class='flex_r_j_between_align_center date_n_time'>
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
                                  <option value='+1'>
                                    (+01:00) West Central Africa
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='flex_r_j_end_align_center form_buttons'>
                            <SimpleNavigation />
                          </div>
                        </div>
                      </Step>
                      <Step id='second'>
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
                        <SimpleNavigation />
                      </Step>
                      <Step id='third'>
                        <div>
                          <div class='full_row header header2'>
                            <p>Add Team Members</p>
                          </div>
                          <div class='file_input_wrapper'>
                            <div class='course_link' id=''>
                              <DynamicInput
                                memberValues={memberValues}
                                members={team.members && [...team.members]}
                              />
                            </div>
                          </div>
                          <SimpleNavigation />
                        </div>
                      </Step>
                      <Step id='fourth'>
                        <div>
                          <div class='full_row header header2'>
                            <p>Course Documents / Links</p>
                          </div>

                          <Tabs>
                            <TabList>
                              <Tab>Documents</Tab>
                              <Tab>Links</Tab>
                            </TabList>
                            <TabPanel>
                              <div class='file_input_wrapper'>
                                <div class='course_link' id=''>
                                  <div class='common_input_wrapper_2'>
                                    <DynamicUpload
                                      documentSet={documentSet}
                                      docsupload={
                                        documents.docs && [...documents.docs]
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div class='file_input_wrapper'>
                                <div class='course_link' id=''>
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
                            </TabPanel>
                          </Tabs>

                          <SimpleNavigation />
                        </div>
                      </Step>
                      <Step id='fifth'>
                        <div>
                          <div class='full_row header header2'>
                            <p>Course Videos</p>
                          </div>
                          <Tabs>
                            <TabList>
                              <Tab>Videos</Tab>
                              <Tab>Links</Tab>
                            </TabList>
                            <TabPanel>
                              <div class='file_input_wrapper'>
                                <div class='course_link' id=''>
                                  <div class='common_input_wrapper_2'>
                                    <UploadVideo
                                      videoSet={videoSet}
                                      vidupload={
                                        videos.vids && [...videos.vids]
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div class='file_input_wrapper'>
                                <div class='course_link' id=''>
                                  <div class='common_input_wrapper_2'>
                                    <VideoLinks
                                      VidLinksSet={VidLinksSet}
                                      vidlinks={
                                        videolinks.vlinks && [
                                          ...videolinks.vlinks,
                                        ]
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                          </Tabs>
                          <SimpleNavigation />
                        </div>
                      </Step>
                    </Steps>
                  </Wizard>
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
  addTopics: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  courses: state.courses,
});

export default connect(mapStateToProps, { addCourse, addTopics })(
  withRouter(CreateCourse)
);
