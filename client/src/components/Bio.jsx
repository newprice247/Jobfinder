import { PencilIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { updateUser } from "../../utils/API";
// imports the resume uploader component from the components folder, used to upload resumes to the database
import ResumeUploader from "./ResumeUploader";

export default function Bio(props) {
  const UserProfile = () => {
    // sets the user state to an empty object, is used to store the user information from the database
    const [user, setUser] = useState({
      _id: "",
      bio: "",
      fullName: "",
      username: "",
      email: "",
      phone: "",
      salaryExpectation: "",
    });
    // sets the editMode state to false, is used to switch between view mode and edit mode
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState({});
    // handles the user information from the database and sets it to the user state
    useEffect(() => {
      setUser({
        _id: props.id,
        bio: props.bio,
        fullName: props.name,
        username: props.username,
        email: props.email,
        phone: props.phone,
        salaryExpectation: props.salaryExpectation,
      });
    }, [props]);
    // when the user clicks the update button, the user information is copied to the editedUser state and the editMode state is set to true
    const handleUpdateClick = () => {
      // Copy the user information to the editedUser state
      setEditedUser({
        ...user,
      });
      setEditMode(true);
    };
    // when the user clicks the cancel button, exit edit mode and set the editMode state to false
    const handleCancelClick = () => {
      // Cancel the edit and switch back to view mode
      setEditMode(false);
    };
    // when the user clicks the save button, the editedUser state is saved to the database and the editMode state is set to false
    const handleSaveClick = () => {
      // Save the changes
      updateUser(editedUser._id, editedUser)
        .then((data) => {
          // Update the user state
          setUser(data);
          // Switch back to view mode
          setEditMode(false);
          // Reload the page to show the updated information
          window.location.reload();
        })
        .catch((err) => console.error(err));
    };
    // when the user types in the form, the editedUser state is updated
    const handleInputChange = (e) => {
      // Update the editedUser state as the user types in the form
      setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    return (
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Users profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and resumes.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          {" "}
          {/* When the user is in edit mode, the form is displayed, otherwise the user information is displayed */}
          {editMode ? (
            <form>
              <label
                for="bio"
                class="block mb-2 text-sm font-medium text-black">
                Bio:
                <input
                  class="block mb-2 font-medium text-gray-900 bg-gray-50 border rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder={props.bio}
                  type="text"
                  name="bio"
                  onChange={handleInputChange}
                />
              </label>
              <label
                for="fullname"
                class="block mb-2 text-sm font-medium text-black">
                Full Name:
                <input
                  class="block mb-2 h-8 font-medium text-gray-900 bg-gray-50 border rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder={props.name}
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                />
              </label>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-black">
                Username:
                <input
                  class="block mb-2 h-8 font-medium text-gray-900 bg-gray-50 border rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder={props.username}
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-black">
                Email address:
                <input
                  class="block mb-2 h-8 font-medium text-gray-900 bg-gray-50 border rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder={props.email}
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-black">
                Phone number:
                <input
                  class="block mb-2 h-8  font-medium bg-gray-50 border text-gray-900 rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder={props.phone}
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-black">
                Salary expectation:
                <input
                  class="block mb-2 h-8 font-medium bg-gray-50 border text-gray-900 rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder={props.salaryExpectation}
                  type="text"
                  name="salaryExpectation"
                  onChange={handleInputChange}
                />
              </label>
              <div className="flex w-max items-end gap-4 float-right">
                <Button
                  type="button"
                  size="sm"
                  variant="outlined"
                  onClick={handleCancelClick}>
                  Cancel
                </Button>
                <Button type="button" size="sm" className="bg-black" onClick={handleSaveClick}>
                  Save
                </Button>
              </div>
            </form>
          ) : (
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Bio
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.bio}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Username
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.username}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.phone}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {props.salaryExpectation}
                </dd>
              </div>
              
              <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
                <div className="text-sm font-medium leading-6 text-gray-900 border-b border-gray-300">
                  <dt>Add your resume below:</dt>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-900 sm:flex sm:flex-col sm:block">
                  <ResumeUploader />
                </div>
              {/* Resume uploader component, used to upload resumes to the database */}

              <div class="flex items-center justify-center mt-24 space-y-4">
                <button
                  type="button"
                  class="bg-black hover:bg-365314 text-white font-bold py-2 px-4 rounded"
                  onClick={handleUpdateClick}
                >
                  
                  Edit profile
                </button>
              </div>
            </dl>
          )}
        </div>
      </div>
    );
  };
  {/* When the user is logged in, the UserProfile component is displayed, otherwise the user is redirected to the login page */ }
  return <UserProfile />;
}
