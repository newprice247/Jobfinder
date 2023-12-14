import React, { useState, useEffect } from "react";
import { storage, db } from "../../utils/gsBucket";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { push, onValue, ref as dbRef } from "firebase/database";
import { addUserResume } from "../../utils/API";
import search from "../../utils/API";
import Auth from "../../utils/auth";

const ResumeUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [user, setUser] = useState({});
  const [resumeUrl, setResumeUrl] = useState("");
  const userId = Auth.getProfile().data._id;
  useEffect(() => {
    search
      .fetchUser(userId)
      .then((data) => {
        setUser(data);
        setResumeUrl(data.resumeUrl);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);
  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, `resumes/${v4()}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(snapshot.ref).then((url) => {
        const newFile = { name: file.name, url: url };

        setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
        // grabs the user id from the auth.js file and adds the resume url to the user model in the database
        const userId = Auth.getProfile().data._id;
        addUserResume(userId, {resumeUrl : url});
        
        push(dbRef(db, "uploadedFiles"), newFile);
      });
    });
  };

  // Load files from Firebase Realtime Database on component mount
  useEffect(() => {
    const filesRef = dbRef(db, "uploadedFiles");
    onValue(filesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const files = Object.values(data);
        setUploadedFiles(files);
      }
    });

    return () => {
      // Unsubscribe from the database updates when the component unmounts
      // filesRef.off("value");
    };
  }, []);



  return (
    <div className="">
      <div class="flex items-center justify-center mx-auto w-1/2">
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
            <p class=" text-sm  text-gray-500 dark:text-gray-400">
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
        <a 
        href={resumeUrl} 
        target="_blank" 
        rel="noreferrer"
        className="text-myColor-2 p-5 m-5 rounded-md bg-myColor-1 text-lg font-bold sm:flex sm:flex-col sm:block h-15"
        >
          {user.name}'s Resumes:
        </a>
         {/* Conditionally render the message if no resumes are uploaded */}
      {uploadedFiles.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400 ml-10">
          No resumes uploaded yet.
        </p>
      )}
      </div>
    </div>
  );
};

export default ResumeUploader;