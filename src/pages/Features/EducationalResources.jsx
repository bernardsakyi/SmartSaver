import React from 'react';
import './EducationalResources.css'; // Add your CSS file for styling

const EducationalResources = () => {
  return (
    <div className="educational-resources-container">
      <h2>Educational Resources</h2>
      <div className="articles-and-videos">
        <h3>Articles and Videos</h3>
        <div className="resource-list">
          {/* Beautifully designed placeholders for videos and links */}
          <div className="resource-card">
            <div className="placeholder-video"></div>
            <div className="resource-info">
              <div className="placeholder-title"></div>
              <div className="placeholder-description"></div>
            </div>
          </div>
          {/* Add more resource cards for articles and videos */}
        </div>
      </div>
      <div className="tutorials-and-tools">
        <h3>Tutorials and Interactive Tools</h3>
        <div className="resource-list">
          {/* Beautifully designed placeholders for tutorials and tools */}
          <div className="resource-card">
            <div className="placeholder-tutorial"></div>
            <div className="resource-info">
              <div className="placeholder-title"></div>
              <div className="placeholder-description"></div>
            </div>
          </div>
          {/* Add more resource cards for tutorials and tools */}
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
