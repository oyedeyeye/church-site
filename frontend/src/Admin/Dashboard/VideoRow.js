import React from 'react';

const VideoRow = ({ title, category, date, visibility, views, actions }) => {
  return (
    <div className="flex items-center justify-between py-2 px-4 bg-gray-100">
      <div className="flex items-center">
        <div className="mr-4">
          {/* Thumbnail */}
          <img src="thumbnail-url" alt="Video Thumbnail" className="w-16 h-16 object-cover" />
        </div>
        <div>
          {/* Video Title */}
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="text-gray-600">
            {/* Category and Date */}
            <span>{category}</span> · <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 text-gray-600">{visibility}</div>
        <div className="mr-4 text-gray-600">{views} views</div>
        <div className="flex">
          {/* Render action icons */}
          {actions.map((action, index) => (
            <button key={index} className="mx-1 text-gray-600 hover:text-gray-800">
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
