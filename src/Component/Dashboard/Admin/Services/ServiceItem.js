import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteService } from '../../../../actions/service';
// import './Service.css'

const ServiceItem = ({ deleteService, service: { id, slug, name, percentage } }) => {
  return (
    <Fragment>
      <div className='each_service'>
        <div className='full_row flex_r top'>
          <div className='left'>
            <p> {name} </p>
            <span> {percentage}% (Commission) </span>
          </div>
          <div className='right'>
            <div className='action'>
              <span> ... </span>
              <div className='action_dropdown'>
                <Link to={`/service/${slug}`}> View </Link>
                <Link to={`/service/update/${slug}`}> Update </Link>
                <Link to='#!' onClick={e => deleteService({slug})} className='delete'>
                  {' '}
                  Delete{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
  deleteService: PropTypes.func.isRequired
};

export default connect(null, { deleteService })(ServiceItem);
