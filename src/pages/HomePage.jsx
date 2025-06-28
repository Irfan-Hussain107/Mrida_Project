import React from 'react';
import { Link } from 'react-router-dom'; 

function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Main Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/farm.jpg')" }}>
        <div className="bg-black/40 p-6 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Let's grow more, spend less together</h1>
          <p className="text-lg md:text-xl mb-6">Connecting farmers and labourers for a better future.</p>
          <Link to="/login" className="bg-green-600 hover:bg-green-800 px-6 py-3 rounded text-white font-semibold">Get Started</Link>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What do you want to do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Rent / Buy Tools</h3>
              <p className="mb-4 text-gray-600">Find affordable agricultural tools and machines near you.</p>
              <Link to="/rent-buy-tools" className="text-green-700 font-semibold hover:underline">Explore Tools →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Sell Tools</h3>
              <p className="mb-4 text-gray-600">List your second-hand or new tools to earn money from them.</p>
           
              <Link to="/sell-tools" className="text-green-700 font-semibold hover:underline">Sell Now →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Post Labour Job</h3>
              <p className="mb-4 text-gray-600">Need helping hands? Post your job and get nearby workers.</p>
        
              <Link to="/post-labour-jobs" className="text-green-700 font-semibold hover:underline">Post Job →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Find Work</h3>
              <p className="mb-4 text-gray-600">Looking for farming work near you? Browse available jobs easily.</p>
           
              <Link to="/find-work" className="text-green-700 font-semibold hover:underline">Browse Jobs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/working_farmers.jpg" alt="Working Farmer" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Agrobazaar?</h2>
            <p className="text-gray-700 mb-4">Agrobazaar empowers farmers and laborers by providing a digital platform for renting, selling, and hiring in agriculture. It's designed to be simple, effective, and accessible—even for those with minimal smartphone experience.</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Affordable access to tools</li>
              <li>Secure and verified listings</li>
              <li>Nearby labour connection</li>
              <li>One-stop digital solution for farming needs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
