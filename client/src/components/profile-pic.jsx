import React, { useState } from "react";

const ProfilePicture = ({ imageUrl, alt, className, onImageChange }) => {
  const [image, setImage] = useState(imageUrl);
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      onImageChange(reader.result); //updates parent component of change
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  

  return (
    <div className="relative">
      <button
        type="button"
        className="absolute top-0 right-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={() => document.getElementById("fileInput").click()}
      >
        Edit
      </button>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt={alt} className={className} />}
    </div>
  );
};

export default ProfilePicture;