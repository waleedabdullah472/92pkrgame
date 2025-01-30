// components/Two.jsx
import React from 'react';
import './Two.css'; // Import the CSS file (create Two.css)

function 2() {
  const data = [ // Example data (replace with your actual data)
    { id: 1, title: "Item 1", description: "Description of item 1" },
    { id: 2, title: "Item 2", description: "Description of item 2" },
    { id: 3, title: "Item 3", description: "Description of item 3" },
  ];

  return (
    <div className="two-container"> {/* Container for styling */}
      <h1>Page Two</h1>
      <p>Content for page two. This could be anything!</p>

      {/* Example of displaying data */}
      <div className="data-list">
        {data.map(item => (
          <div key={item.id} className="data-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Example of an image */}
      <img src="image2.jpg" alt="Image for page two" className="two-image" />  {/* Replace with your image path */}

      {/* Example of a button */}
      <button className="two-button">Click Me</button>

       {/* You can add more elements as needed */}
    </div>
  );
}

export default 2;