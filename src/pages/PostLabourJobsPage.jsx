import React, { useState } from 'react';

function PostLabourJobsPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    wage: '',
    jobType: '', 
    seasonal: '', 
    date: '',
    image: null 
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', formData);
        alert('Job Posted Successfully (Simulation)');
  };

  return (
    <div className="bg-green-50 min-h-screen text-gray-800 font-sans">
      {/* Post Labour Job Form */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Post Labour Job</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">

          <div>
            <label htmlFor="title" className="block font-semibold mb-1">Job Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border rounded px-3 py-2"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block font-semibold mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              className="w-full border rounded px-3 py-2"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="location" className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border rounded px-3 py-2"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="wage" className="block font-semibold mb-1">Wage Offered (₹)</label>
            <input
              type="number"
              id="wage"
              name="wage"
              className="w-full border rounded px-3 py-2"
              value={formData.wage}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Job Type</label>
            <div className="flex gap-4">
              <input
                type="radio"
                id="fulltime"
                name="jobType"
                value="fulltime"
                className="hidden-radio" 
                checked={formData.jobType === 'fulltime'}
                onChange={handleRadioChange}
                required 
              />
              <label
                htmlFor="fulltime"
                className={`option-label ${formData.jobType === 'fulltime' ? 'active' : ''}`} // Classes from index.css
              >
                Full-Time
              </label>

              <input
                type="radio"
                id="parttime"
                name="jobType"
                value="parttime"
                className="hidden-radio"
                checked={formData.jobType === 'parttime'}
                onChange={handleRadioChange}
              />
              <label
                htmlFor="parttime"
                className={`option-label ${formData.jobType === 'parttime' ? 'active' : ''}`}
              >
                Part-Time
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Is it Seasonal/Temporary?</label>
            <div className="flex gap-4">
              <input
                type="radio"
                id="seasonal-yes"
                name="seasonal"
                value="yes"
                className="hidden-radio"
                checked={formData.seasonal === 'yes'}
                onChange={handleRadioChange}
                required 
              />
              <label
                htmlFor="seasonal-yes"
                className={`option-label ${formData.seasonal === 'yes' ? 'active' : ''}`}
              >
                Yes
              </label>

              <input
                type="radio"
                id="seasonal-no"
                name="seasonal"
                value="no"
                className="hidden-radio"
                checked={formData.seasonal === 'no'}
                onChange={handleRadioChange}
              />
              <label
                htmlFor="seasonal-no"
                className={`option-label ${formData.seasonal === 'no' ? 'active' : ''}`}
              >
                No
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block font-semibold mb-1">Job Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full border rounded px-3 py-2"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block font-semibold mb-1">Upload Image (optional)</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded w-full font-semibold hover:bg-green-800">
            Post Job
          </button>
        </form>
      </section>
    </div>
  );
}

export default PostLabourJobsPage;
