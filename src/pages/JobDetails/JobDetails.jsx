import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();
  // console.log(job);
  return (
    <div className="my-10 text-center">
      <h2 className="text-3xl mb-3">Job Title: {title}</h2>
      <p>Company: {company}</p>
      <Link to={`/jobApply/:${_id}`}>
        <button className="btn btn-primary mt-3">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
