import { useState } from "react";
import axios from "axios";

export default function MediaUpload({ setMediaUrls }) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    // Handle file selection
    const handleFileChange = (e) => {
        setSelectedFiles((prev) => [...prev, ...Array.from(e.target.files)]);
    };

    // Handle drag-and-drop
    const handleDrop = (e) => {
        e.preventDefault();
        setSelectedFiles((prev) => [
            ...prev,
            ...Array.from(e.dataTransfer.files),
        ]);
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) return alert("Select files first!");
        setLoading(true);

        const formData = new FormData();
        selectedFiles.forEach((file) => formData.append("images", file));

        try {
            const res = await axios.post(
                "http://localhost:3000/api/users/upload",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            if (res.data.urls) {
                setMediaUrls((prev) => [...prev, ...res.data.urls]);
                setSelectedFiles([]);
            }
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Upload failed. Check console.");
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFile = (index) => {
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="mb-8">
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-4 border-dashed border-blue-400 rounded-lg p-6 text-center cursor-pointer hover:border-blue-600 transition-colors">
                <p className="text-gray-600 mb-2">
                    Drag & drop files here or click to select
                </p>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                />
                <label
                    htmlFor="fileInput"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                    Select Files
                </label>
            </div>

            {selectedFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="relative group">
                            {file.type.startsWith("image") ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="w-full h-24 object-cover rounded"
                                />
                            ) : (
                                <video
                                    src={URL.createObjectURL(file)}
                                    className="w-full h-24 object-cover rounded"
                                    muted
                                />
                            )}
                            <button
                                onClick={() => handleRemoveFile(index)}
                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center mt-4">
                <button
                    onClick={handleUpload}
                    disabled={loading || selectedFiles.length === 0}
                    className={`px-6 py-2 rounded text-white ${
                        loading || selectedFiles.length === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                    }`}>
                    {loading
                        ? "Uploading..."
                        : `Upload ${selectedFiles.length} File(s)`}
                </button>
            </div>
        </div>
    );
}
