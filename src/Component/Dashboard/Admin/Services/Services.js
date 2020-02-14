import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import Spinner from '../../../Spinner/Spinner';
import { getServices, addService } from '../../../../actions/service';
import ServiceItem from './ServiceItem';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Services = ({ getServices, services: { services, loading }, user, addService, history }) => {
    const [formData, setFormData] = useState({
        name: '',
        percentage: ''
    });

  useEffect(() => {
    getServices();
  }, [getServices]);

  const {name, percentage} = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
  e.preventDefault();
  addService(formData, history);
  setFormData({
      name: '',
      percentage: ''
  })
};

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
              <div className='full_row admin_services_wrapper'>
                {services.length > 0 ? (
                  services.map(service => (
                    <ServiceItem key={service.id} service={service} />
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
            <form onSubmit={e => onSubmit(e)}>
          <div className='full_row head'>
            <h4> Add service </h4>
          </div>
          <div className='common_input_wrapper_2'>
            <input type='text' name='name' value={name} onChange={e => onChange(e)} placeholder='Service Name' required />
          </div>
          <div className='common_input_wrapper_2'>
            <input type='number' name='percentage' value={percentage} onChange={e => onChange(e)} placeholder='Enter percentage' required />
          </div>
          <div className='flex_r_j_end_align_center footer_button'>
            <div>
                <Link to='#.'>
                <button type='button' onClick={<Redirect to='#' />} className='grey_btn'>
                  Close
                </button>
                </Link>
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

Services.propTypes = {
  getServices: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  services: state.services,
  user: state.auth.user
});

export default connect(mapStateToProps, { getServices, addService })(withRouter(Services));
