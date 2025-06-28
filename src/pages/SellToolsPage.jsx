import React, { useState } from 'react';

function SellToolsPage() {
  const [formData, setFormData] = useState({
    name: '',
    type: '', 
    price: '',
    location: '',
    available: true, 
    image: null, 
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Tool submission received (console.log only for now). Backend integration is needed here.');
  };

  return (
    <div className="bg-green-50 min-h-screen text-gray-800 font-sans">
      {/* Form Section */}
      <section className="max-w-3xl mx-auto p-6 bg-white mt-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Post Your Tool</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="tool-name">Tool Name</label>
            <input
              type="text"
              id="tool-name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Type</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="rent"
                  className="accent-green-600"
                  checked={formData.type === 'rent'}
                  onChange={handleChange}
                  required
                />
                Rent
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="buy"
                  className="accent-green-600"
                  checked={formData.type === 'buy'}
                  onChange={handleChange}
                />
                Buy
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="tool-price">Price (₹)</label>
            <input
              type="number"
              id="tool-price"
              name="price"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="tool-location">Location</label>
            <input
              type="text"
              id="tool-location"
              name="location"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="available"
                className="accent-green-600"
                checked={formData.available}
                onChange={handleChange}
              />
              Available
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="tool-image">Upload Image</label>
            <input
              type="file"
              id="tool-image"
              name="image"
              accept="image/*"
              className="w-full border border-gray-300 rounded px-3 py-2"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="tool-description">Description</label>
            <textarea
              id="tool-description"
              name="description"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-2 rounded"
          >
            Submit Tool
          </button>
        </form>
      </section>
    </div>
  );
}

export default SellToolsPage;