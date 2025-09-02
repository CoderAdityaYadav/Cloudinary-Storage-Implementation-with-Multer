import { useState } from "react";
import MediaUpload from "./components/MediaUpload";
import MediaGallery from "./components/MediaGallery";

function App() {
    const [mediaUrls, setMediaUrls] = useState([]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Media Uploader
            </h1>
            <MediaUpload setMediaUrls={setMediaUrls} />
            <MediaGallery media={mediaUrls} />
        </div>
    );
}

export default App;