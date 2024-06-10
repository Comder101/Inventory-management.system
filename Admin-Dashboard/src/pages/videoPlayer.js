import React from 'react';

// const VideoPlayer = ({ videoPath }) => {
//   return (
//     <div className="mt-8">
//       <h3 className="font-bold text-xl mb-4">Uploaded Video</h3>
//       <video controls className="w-full">
//         <source src={videoPath} type='video/mp4'/>
//       </video>
//     </div>
//   );
// };

const VideoPlayer = ({ videoPath }) => {
  return (
    <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl rounded-lg max-w-4xl mx-auto">
      <h3 className="font-bold text-2xl mb-4 text-white text-center">Processed Video</h3>
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <video
          controls
          className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-white shadow-md"
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};



export default VideoPlayer;
