
import { useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect( () => {
      fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
        // console.log(data)
      })
      .catch(err => {
        console.log(err);
      })
    },[])

    if(loading) {
      return <div>Loading ---------------/</div>
    }

  return (
    <div>
      <h2 className='text-center text-4xl my-5 mt-10'>Hot Jobs of the Day!!!</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
        </div>
    </div>
  )
}

export default HotJobs