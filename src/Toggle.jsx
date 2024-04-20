import React, { useState } from 'react';


export default function Home1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Click me
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p>This is some paragraph text that will be displayed when the dropdown is clicked.</p>
          <p>You can add more paragraphs or any other HTML content here.</p>
        </div>
      )}
    </div>
  );
}
