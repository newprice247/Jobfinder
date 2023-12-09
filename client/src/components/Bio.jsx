import { PaperClipIcon } from '@heroicons/react/20/solid';
<<<<<<< HEAD
import UserResume from './ResumeUploader';

=======
import React, { useEffect, useState } from "react";
import ProfilePicture from "./profile-pic"; // Adjust the import path based on your project structure
const defaultUserImage = '../../client/src/assets/images/Screenshot(384).png'; // Replace with the path to your default image
//need correct pathing
import { Button } from "@material-tailwind/react";
>>>>>>> b028a60b0c13a3b36089a9d6f24a880835896109

export default function Bio(props) {
  const UserProfile = () => {
    const [user, setUser] = useState({});
    const [newProfilePicture, setNewProfilePicture] = useState(null); //allows me to update the state of new profile pic using setnewprofilepicture function

    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState({});

    useEffect(() => {
      setUser(props.user);
    }, [props.user]);

    const handleImageChange = (imageUrl) => {
      setNewProfilePicture(imageUrl);
    };

    const handleUpdateClick = () => {
      // Copy the user information to the editedUser state
      setEditedUser({ ...user });
      setEditMode(true);
    };

    const handleCancelClick = () => {
      // Cancel the edit and switch back to view mode
      setEditMode(false);
    };

    const handleSaveClick = () => {
      // Save the edited user information and switch back to view mode
      setUser(editedUser);
      setEditMode(false);
    };

    const handleInputChange = (e) => {
      // Update the editedUser state as the user types in the form
      setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    return (
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Users profile</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and resumes.</p>
        </div>
<<<<<<< HEAD
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Username</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.username}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Phone number</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.phone}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Resume</dt>
              <dd>
              <UserResume />
              </dd>
              {/* <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
=======
        <div className="mt-6 border-t border-gray-100"> {/*we need profilePicUrl in user model user.profilePictureUrl*/}
          <ProfilePicture imageUrl={newProfilePicture || defaultUserImage} alt="Profile Picture" className="rounded-full" onImageChange={handleImageChange} />

          {editMode ? (
            <form>
              {/* <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bio:
                <input
                 class="block mb-2 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                 placeholder="Hello, looking for job that catch my interest..."
                  type="text"
                  name="bio"
                  value={editedUser.bio}
                  onChange={handleInputChange}
                />
              </label> */}
              <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name:
                <input
                  class="block mb-2 h-8 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder="John Doe"
                  type="text"
                  name="fullName"
                  value={editedUser.fullName}
                  onChange={handleInputChange}
                />
              </label>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username:
                <input
                  class="block mb-2 h-8 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder="username321"
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address:
                <input
                  class="block mb-2 h-8 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder="johndoe321@email.com"
                  type="text"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number:
                <input
                  class="block mb-2 h-8 text-sm font-medium bg-gray-50 border text-gray-900 dark:text-white rounded-none w-full text-sm border-gray-300 dark:placeholder-gray-400 p-2.5"
                  placeholder="555-555-5555"
                  type="text"
                  name="phone number"
                  value={editedUser.phone}
                  onChange={handleInputChange}
                />
              </label>
              <div className="flex w-max items-end gap-4 float-right">
              <Button type="button" size="sm" variant="outlined" onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleSaveClick}>
                Save
              </Button>
              </div>
            </form>
          ) : (
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                  qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                  pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.name}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Username</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.username}</dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Phone number</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.phone}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{props.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
              </div>
              <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdateClick}>
                Update profile
              </button>


              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Resume</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                          <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                        </div>
>>>>>>> b028a60b0c13a3b36089a9d6f24a880835896109
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
<<<<<<< HEAD
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd> */}
            </div>
          </dl>
=======
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                          <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          )}
>>>>>>> b028a60b0c13a3b36089a9d6f24a880835896109
        </div>

      </div>
    )
  }
  return <UserProfile />;

}
