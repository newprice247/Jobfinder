import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Handle file upload logic (you can replace this with your actual upload logic)
  useEffect(() => {
    if (selectedFile) {
      // Simulate file upload by pushing the file to the uploadedFiles state
      setUploadedFiles((prevFiles) => [...prevFiles, selectedFile]);
      // Clear the selectedFile state
      setSelectedFile(null);
    }
  }, [selectedFile]);

  return (
    <div className="">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload Resume</span> or drag
              and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PDF, DOCX, PNG, JPG
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {/* Display the list of uploaded files */}
      <div>
        <h2>Uploaded Files:</h2>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
              <a
                href={`${file.name}`}  
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-center" style={{ marginTop: "5rem" }}>
        User Profiles
      </h1>
      <p className="text-center mt-5">Coming Soon!!</p>
    </div>
  );
}
