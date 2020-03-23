import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import Spinner from '../../../Spinner/Spinner';
import {
  getCoachServices,
  getServices,
  addCoachService
} from '../../../../actions/service';
import ServiceItem from './CoachServiceItem';

const CoachServices = ({
  getServices,
  getCoachServices,
  services: { services, coachservices, loading },
  user,
  addCoachService
}) => {

  useEffect(() => {
    getServices();
    getCoachServices();
  }, [getCoachServices, getServices]);

  const [formData, setFormData] = useState({
    coach_id: '',
    service_id: '',
    price_per_hour: '',
    price_per_session: '',
    medium_of_communication: '',
    type: 'CREATE'
  });

  const {
    coach_id,
    type,
    price_per_hour,
    price_per_session,
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    formData.coach_id = user.currentUser.id;
    addCoachService(formData);
    setFormData({
      price_per_hour: '',
      price_per_session: '',
      medium_of_communication: ''
    });
  };

  let selectedOption = 'Pick a Service';

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />

        <section className='dashboard_body'>
          <Topnav user={user} htitle='Services' />
          <div className='full_row'>
            <div className='dashboard_center'>
              <div className='flex_r_j_end_align_center add_service_button'>
                <a href='#add-service-modal'>
                  <button className='black_btn'>add service</button>
                </a>
              </div>
              <div className='full_row added_services_wrapper'>
                {coachservices.length > 0 ? (
                  coachservices.map(coachservice => (
                    
                    <ServiceItem
                      key={coachservice.id}
                      coachservice={coachservice}
                    />
                  ))
                ) : (
                  <h4>No Services Found...</h4>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className='add-service-modal' id='add-service-modal'>
        <div>
          <div className='full_row head'>
            <h4> Add service </h4>
            <p>
              We are going to add 7% to the amount you want to charge as our
              service cost
            </p>
          </div>
          <form onSubmit={e => onSubmit(e)}>
          <input name='type' type='hidden' value={type} onChange={e => onChange(e)} />
          <div className='common_input_wrapper_2'>
            <select name='service_id' className='search_select search_select2' onChange={e => onChange(e)}>
              <option defaultValue={selectedOption}>{selectedOption}</option>
              {services.length > 0 ? (
                services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))
              ) : (
                <option>No Services Found...</option>
              )}
            </select>
          </div>
          <input
            name='coach_id'
            type='hidden'
            value={coach_id}
            onChange={e => onChange(e)}
          />
          <div className='full_row cols-2'>
            <div className='common_input_wrapper_2'>
              <input
                type='number'
                min='0'
                name='price_per_hour'
                value={price_per_hour}
                placeholder='Enter price per hour'
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className='common_input_wrapper_2'>
              <input
                type='number'
                min='0'
                name='price_per_session'
                value={price_per_session}
                onChange={e => onChange(e)}
                placeholder='Enter price per session'
                required
              />
            </div>
          </div>
          <div className='full_row comm_channel'>
            <div className='full_row header'>
              <p>Select communication channel</p>
            </div>
            <div className='full_row comm_channel_type'>
              <div className='flex_r_wrap comm_channel_options'>
                <div className='form-check'>
                  <label>
                    <input
                      type='radio'
                      name='medium_of_communication'
                      value='1'
                      className='form-check-input'
                      onChange={e => onChange(e)}
                      readOnly
                    />
                    Zoom
                  </label>
                </div>

                <div className='form-check'>
                  <label>
                    <input
                      type='radio'
                      name='medium_of_communication'
                      value='2'
                      onChange={e => onChange(e)}
                      className='form-check-input'
                      readOnly
                    />
                    Skype
                  </label>
                </div>

                <div className='form-check'>
                  <label>
                    <input
                      type='radio'
                      name='medium_of_communication'
                      value='3'
                      onChange={e => onChange(e)}
                      className='form-check-input'
                      readOnly
                    />
                    Whatsapp
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='flex_r_j_end_align_center footer_button'>
            <div>
              <a href='#overview_cards'>
                <button type='button' className='grey_btn'>Close</button>
              </a>
            </div>
            <div>
              <button type='submit' className='black_btn'>add</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CoachServices.propTypes = {
  getServices: PropTypes.func.isRequired,
  getCoachServices: PropTypes.func.isRequired,
  addCoachService: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  services: state.services,
  user: state.auth.user
});

export default connect(mapStateToProps, { getServices, getCoachServices, addCoachService })(CoachServices);
