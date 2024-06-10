// import React, { useState } from 'react'
// import '../App.css';
// import Navbar from '../components/Navbar';

// export default function Home() {

//     return (
//         <div className="container">
//             <div className="main bg-tailtertiary h-screen m-0 p-0">
//                 <Navbar pagename="Dashboard Home Page" />
//                 <h2 className='font-poppins font-bold text-5xl text-center mt-48'>Welcome to Admin Dashboard</h2>
//             </div>
//         </div>
//     )
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VideoUpload from "./VideoUpload";
import VideoPlayer from "./videoPlayer";

// export default function Home() {
//   const [uploadedVideoPath, setUploadedVideoPath] = useState(null);

//   return (
//     <div className="container flex flex-col items-center justify-center h-screen bg-tailtertiary">
//       <Navbar pagename="Dashboard Home Page" />
//       <h2 className="font-poppins font-bold text-5xl text-center mt-12 mb-8 text-white">
//         Welcome to Admin Dashboard
//       </h2>
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h3 className="font-bold text-xl mb-4">Upload Video</h3>
//         <VideoUpload setUploadedVideoPath={setUploadedVideoPath} />
//       </div>
//       {uploadedVideoPath && <VideoPlayer videoPath={uploadedVideoPath} />}
//     </div>
//   );
// }
export default function Home() {
  const [uploadedVideoPath, setUploadedVideoPath] = useState(null);

  return (
    <div className="container flex flex-col items-center justify-center h-screen bg-tailtertiary px-4">
      <Navbar pagename="Dashboard Home Page" />
      
      <div className="flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <div className="flex-1">
          <center>
          <h3 className="font-bold text-xl mb-4">Upload Video</h3>
          <VideoUpload setUploadedVideoPath={setUploadedVideoPath} />
          </center>
        </div>
        {uploadedVideoPath && (
          <div className="flex-1">
            <VideoPlayer videoPath={uploadedVideoPath} />
          </div>
        )}
      </div>
    </div>
  );
}
