import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = ({ setUploadedVideoPath }) => {
    const [video, setVideo] = useState(null);
    const [processedVideoUrl, setProcessedVideoUrl] = useState('');

    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const videoPath = "http://127.0.0.1:8000/media/void_detect/test.mp4";
        setUploadedVideoPath(videoPath);
    
        if (video) {
            try {
                const formData = new FormData();
                formData.append('video', video);
    
                const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                console.log('Response from server:', response.data);
                setProcessedVideoUrl(response.data.processed_video_url); 
                setUploadedVideoPath(response.data.processed_video_url); // Update parent component's state
            } catch (error) {
                console.error('Error uploading video:', error);
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <label htmlFor="videoInput" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md cursor-pointer hover:bg-indigo-700 transition duration-300 ease-in-out mb-4">
                Choose Video
            </label>
            <input type="file" id="videoInput" accept="video/*" onChange={handleVideoChange} className="hidden" />
            {video && (
                <p className="text-gray-700 mb-4">{video.name}</p>
            )}
            <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out">
                Submit
            </button>
        </div>
    );
};

export default VideoUpload;
