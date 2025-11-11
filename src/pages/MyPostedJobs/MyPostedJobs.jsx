import React, { Suspense } from 'react'
import useAuth from '../../hooks/useAuth'
import MyPostedJobList from './MyPostedJobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

    const { user } = useAuth();

  return (
    <div>
      <h2>MyPostedJobs: </h2>
      <Suspense>
        <MyPostedJobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyPostedJobList>
      </Suspense>
    </div>
  )
}

export default MyPostedJobs