import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import Spinner from '../../../Spinner/Spinner';
import { getCoachServices, addService } from '../../../../actions/service';
import ServiceItem from './CoachServiceItem';
import { withRouter, Link, Redirect } from 'react-router-dom';

const CoachServices = ({
  getCoachServices,
  services: { services, loading },
  user,
  addService,
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    percentage: ''
  });

  useEffect(() => {
    getCoachServices();
  }, [getCoachServices]);

  const { name, percentage } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addService(formData, history);
    setFormData({
      name: '',
      percentage: ''
    });
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
              <div className='full_row added_services_wrapper'>
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
      <div className="add-service-modal" id="add-service-modal">
    <div>
        <div className="full_row head">
            <h4> Add service </h4>
            <p>
                We are going to add 7% to the amount you want to charge 
                as our service cost
            </p>
        </div>

        <div className="common_input_wrapper_2">
            <select name="" id="" className="search_select search_select2">
                <option value=""> Pick a service </option>
            </select>
        </div>
        <div className="full_row cols-2">
            <div className="common_input_wrapper_2">
              <input type="text" name="" id="" placeholder="Enter price per hour" />
            </div>
            <div className="common_input_wrapper_2">
              <input type="text" name="" id="" placeholder="Enter price per session" />
            </div>
        </div>
        <div className="full_row comm_channel">
            <div className="full_row header">
              <p>
                Select communication channel
              </p>
            </div>
            <div className="full_row comm_channel_type">
              <div className="flex_r_wrap comm_channel_options">

                  <div>
                      <p>
                        Zoom
                      </p>
                  </div>
                  <div>
                      <p>
                        Skype
                      </p>
                  </div>
                  <div className="active">
                      <p>
                        Whatsapp
                      </p>
                  </div>

              </div>
            </div>
        </div>
        <div className="flex_r_j_end_align_center footer_button">
            <div>
                <a href="#overview_cards">
                    <button className="grey_btn">
                        cancel
                    </button>
                </a>
            </div>
            <div>
                <button className="black_btn">
                  add
                </button>
            </div>
        </div>
    </div>
</div>
    </Fragment>
  );
};

CoachServices.propTypes = {
  getCoachServices: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  services: state.services,
  user: state.auth.user
});

export default connect(mapStateToProps, { getCoachServices, addService })(
  withRouter(CoachServices)
);
