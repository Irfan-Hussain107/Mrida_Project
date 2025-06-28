import React, { useState, useEffect } from 'react';

function RentBuyToolsPage() {
  const initialTools = [
    {
      id: 1,
      name: "Tractor",
      type: "rent",
      price: "₹500/day",
      location: "Nagpur, MH",
      available: true,
      image: "https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=1073",
      description: "Powerful tractor suitable for ploughing and harvesting."
    },
    {
      id: 2,
      name: "Rotavator",
      type: "buy",
      price: "₹12,000",
      location: "Kanpur, UP",
      available: true,
      image: "https://www.fieldking.com/blogs/wp-content/uploads/2025/05/tractor-blade.jpg",
      description: "Brand new rotavator for preparing soil."
    },
    {
      id: 3,
      name: "Sprayer",
      type: "rent",
      price: "₹150/day",
      location: "Patna, BR",
      available: true,
      image: "https://m.media-amazon.com/images/I/71gWfs0OVmL.jpg",
      description: "Sprayer suitable for pesticides and irrigation."
    },
    {
      id: 4,
      name: "Seeder",
      type: "buy",
      price: "₹7,000",
      location: "Nashik, MH",
      available: true,
      image: "https://www.smsfoundation.org/wp-content/uploads/2023/02/1.jpg",
      description: "Seeder machine with good efficiency."
    }
  ];

  const [tools, setTools] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('both');
  const [loadedCount, setLoadedCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ img: '', title: '', desc: '' });

  // Determine batch size based on screen width
  const getLoadBatch = () => {
    if (window.innerWidth >= 1024) return 6;
    if (window.innerWidth >= 768) return 4;
    return 2;
  };

  // Function to render tools 
  const renderTools = (reset = false) => {
    const batchSize = getLoadBatch();
    let filteredTools = initialTools;

    if (currentFilter !== 'both') {
      filteredTools = initialTools.filter(tool => tool.type === currentFilter);
    }

    if (reset) {
      setTools(filteredTools.slice(0, batchSize));
      setLoadedCount(batchSize);
    } else {
      const nextTools = filteredTools.slice(loadedCount, loadedCount + batchSize);
      setTools(prevTools => [...prevTools, ...nextTools]);
      setLoadedCount(prevCount => prevCount + batchSize);
    }
  };

  useEffect(() => {
    renderTools(true); // Initial load when component mounts or filter changes

    // Handle infinite scroll
    const handleScroll = () => {
      // Check if user has scrolled near the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        renderTools();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, [currentFilter, initialTools]); // Re-run effect when currentFilter changes or initialTools data changes

  const openModal = (img, title, desc) => {
    setModalContent({ img, title, desc });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFilterChange = (filterType) => {
    setCurrentFilter(filterType);
  };

  return (
    <div className="bg-green-50 min-h-screen text-gray-800 font-sans">
      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Available Tools</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`filter-btn px-4 py-2 rounded border border-green-700 ${currentFilter === 'rent' ? 'text-white bg-green-700' : 'text-green-700 bg-white'}`}
            onClick={() => handleFilterChange('rent')}
            data-filter="rent"
          >
            Rent
          </button>
          <button
            className={`filter-btn px-4 py-2 rounded border border-green-700 ${currentFilter === 'buy' ? 'text-white bg-green-700' : 'text-green-700 bg-white'}`}
            onClick={() => handleFilterChange('buy')}
            data-filter="buy"
          >
            Buy
          </button>
          <button
            className={`filter-btn px-4 py-2 rounded border border-green-700 ${currentFilter === 'both' ? 'text-white bg-green-700' : 'text-green-700 bg-white'}`}
            onClick={() => handleFilterChange('both')}
            data-filter="both"
          >
            Both
          </button>
        </div>

        {/* Tool Cards */}
        <div id="tool-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <div key={tool.id} className="bg-white rounded shadow p-4">
              {/* card-image class is defined in index.css */}
              <img src={tool.image} alt={tool.name} className="card-image rounded mb-3" />
              <h3 className="text-xl font-semibold">{tool.name}</h3>
              <p className="text-sm text-gray-600">Type: {tool.type.toUpperCase()}</p>
              <p className="text-sm text-gray-600">Price: {tool.price}</p>
              <p className="text-sm text-gray-600">Location: {tool.location}</p>
              <p className="text-sm text-gray-600 mb-2">Availability: <span className={`${tool.available ? 'text-green-600' : 'text-red-600'}`}>{tool.available ? 'Available' : 'Not Available'}</span></p>
              <button
                onClick={() => openModal(tool.image, tool.name, tool.description)}
                className="bg-blue-600 text-white w-full py-2 rounded mb-2 hover:bg-blue-700"
              >
                View
              </button>
              <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">Request</button>
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}
      {modalOpen && (
        <div id="modal" className="modal" onClick={(e) => { if (e.target.id === 'modal') closeModal(); }}>
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-600 text-xl font-bold hover:text-red-800" aria-label="Close modal">&times;</button>
            <div className="flex justify-center mb-4">
              <img id="modal-img" src={modalContent.img} alt="Tool Image" className="modal-image rounded" />
            </div>
            <h3 id="modal-title" className="text-2xl font-bold mb-2 text-center">{modalContent.title}</h3>
            <p id="modal-description" className="text-gray-700 text-center">{modalContent.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RentBuyToolsPage;
