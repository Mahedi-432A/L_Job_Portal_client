import React, { use } from "react";

const MyPostedJobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div>
      <h2>Jobs Created By me : {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            { jobs.map(( job, index ) => (<tr key={job._id}>
              <th>{ index + 1 }</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>{}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobList;
