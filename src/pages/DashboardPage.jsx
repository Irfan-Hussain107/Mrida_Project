import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  const [userDashboardData, setUserDashboardData] = useState({
    jobsPosted: [
      {
        id: 1,
        title: "Harvesting Help Needed",
        location: "Nagpur, MH",
        applicants: [
          { name: "Rahul Kumar", phone: "9876543210", email: "rahul@email.com", appliedAt: "2025-06-15" },
          { name: "Sita Devi", phone: "9876512345", email: "sita@email.com", appliedAt: "2025-06-18" }
        ]
      },
      {
        id: 2,
        title: "Ploughing Work",
        location: "Kanpur, UP",
        applicants: []
      }
    ],
    jobsApplied: [
      {
        id: 3,
        title: "Tractor Driver Needed",
        employer: "Ramesh Singh",
        location: "Patna, BR",
        status: "Pending",
        appliedAt: "2025-06-10"
      }
    ]
  });

  // useEffect(() => {
  //   fetch('/api/dashboard-data')
  //     .then(response => response.json())
  //     .then(data => setUserDashboardData(data))
  //     .catch(error => console.error('Error fetching dashboard data:', error));
  // }, []);

  const handleApplicantAction = (jobId, applicantName, action) => {
    console.log(`${action} ${applicantName} for job ${jobId}`);
    alert(`${action} action for ${applicantName} on job ${jobId} simulated.`);
  };

  return (
    <div className="bg-green-50 min-h-screen text-gray-800 font-sans">
      {/* Dashboard Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">Jobs You Have Posted</h2>
          <div className="space-y-6" id="jobs-posted">
            {userDashboardData.jobsPosted.map(job => (
              <div key={job.id} className="bg-white shadow rounded p-4">
                <h3 className="text-lg font-semibold mb-1">
                  
                  <Link to={`/job-details/${job.id}`} className="job-link">
                    {job.title}
                  </Link>
                  {' '} - {job.location}
                </h3>
                {job.applicants.length > 0 ? (
                  <>
                    <p className="mt-2 font-medium">Applicants:</p>
                    <ul className="list-disc list-inside space-y-2">
                      {job.applicants.map((applicant, index) => (
                        <li key={index}>
                          <strong>{applicant.name}</strong> - {applicant.phone}, {applicant.email}<br />
                          <small className="text-gray-600">Applied on: {applicant.appliedAt}</small><br />
                          <button
                            onClick={() => handleApplicantAction(job.id, applicant.name, 'Accept')}
                            className="mt-1 mr-2 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleApplicantAction(job.id, applicant.name, 'Reject')}
                            className="mt-1 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                          >
                            Reject
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-gray-500 mt-2">No one has applied yet.</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Jobs You Have Applied To</h2>
          <div className="space-y-4" id="jobs-applied">
            {userDashboardData.jobsApplied.map(job => (
              <div key={job.id} className="bg-white shadow rounded p-4">
                <h3 className="text-lg font-semibold mb-1">
                  <Link to={`/job-details/${job.id}`} className="job-link">
                    {job.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">Location: {job.location}</p>
                <p className="text-sm text-gray-600">Employer: {job.employer}</p>
                <p className="text-sm text-gray-600">Status: <span className="font-medium">{job.status}</span></p>
                <p className="text-sm text-gray-500">Applied on: {job.appliedAt}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
