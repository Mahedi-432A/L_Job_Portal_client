import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-3 items-center">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-2xl">{company}</h3>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
