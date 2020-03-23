import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { getCoachesProfile } from '../../../../actions/profile';
import { connect } from 'react-redux';
import CoachDetailsItem from './CoachDetailsItem';

const CoachDetails = ({
  getCoachesProfile,
  profile: { coaches, loading },
  user,
  match
}) => {
  useEffect(() => {
    getCoachesProfile();
  }, [getCoachesProfile]);
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Coach Details' back='Back to Coaches' />
          {coaches.length > 0 ? (
            coaches.map(coach =>
              parseInt(match.params.id) === coach.id ? (
                <CoachDetailsItem key={coach.id} coach={coach} />
              ) : (
                ''
              )
            )
          ) : (
            <h4>No Coaches Found...</h4>
          )}
        </section>
      </section>
    </Fragment>
  );
};

CoachDetails.propTypes = {
  getCoachesProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
});

export default connect(mapStateToProps, { getCoachesProfile })(CoachDetails);
