import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Layout/Header';
import Topnav from '../Layout/Topnav';
import { viewJobs } from '../../../actions/jobs';
import JobItem from './JobItem';

const ViewJobs = ({ viewJobs, user, jobs: { jobs, loading } }) => {
  useEffect(() => {
      viewJobs();
  }, [viewJobs]);
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Jobs' />
          <div class='full_row job_top_section'>
            <div class='dashboard_center'>
              <div class='flex_r_j_between_align_center job_top'>
                <h5> All Job Postings </h5>
              </div>
            </div>
          </div>
          <div class='full_row jobs_wrapper_section'>
            <div class='dashboard_center'>
              <div class='full_row jobs_wrapper'>
              {jobs.length > 0 ? (
                  jobs.map(job => (
                    <JobItem
                      key={job.id}
                      job={job}
                      user={user}
                    />
                  ))
                ) : (
                  <h4>{loading ? 'Loading...' : 'No Jobs Found...'}</h4>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

ViewJobs.propTypes = {
  user: PropTypes.object.isRequired,
  viewJobs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  jobs: state.jobs
});

export default connect(mapStateToProps, { viewJobs })(ViewJobs);
