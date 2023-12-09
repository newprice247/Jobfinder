import { PaperClipIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from "react";
import ProfilePicture from "./profile-pic"; // Adjust the import path based on your project structure
const defaultUserImage = '../../client/src/assets/images/Screenshot(384).png'; // Replace with the path to your default image
//need correct pathing

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
        <div className="mt-6 border-t border-gray-100"> {/*we need profilePicUrl in user model user.profilePictureUrl*/}
          <ProfilePicture imageUrl={newProfilePicture || defaultUserImage} alt="Profile Picture" className="rounded-full" onImageChange={handleImageChange} />

          {editMode ? (
            <form>
              {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bio:
                <input
                 class="block mb-2 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300"

                  type="text"
                  name="bio"
                  value={editedUser.bio}
                  onChange={handleInputChange}
                />
              </label> */}
              <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name:
                <input
                  class="block mb-2 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300"
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
                  class="block mb-2 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300"
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address:
                <input
                  class="block mb-2 text-sm font-medium text-gray-900 bg-gray-50 border dark:text-white rounded-none w-full text-sm border-gray-300"
                  type="text"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                />
              </label>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number:
                <input
                  class="block mb-2 text-sm font-medium bg-gray-50 border text-gray-900 dark:text-white rounded-none w-full text-sm border-gray-300"
                  type="text"
                  name="fullName"
                  value={editedUser.phone}
                  onChange={handleInputChange}
                />
              </label>

              {/* <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            
              <input id="email" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk@email.com"  type="text"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}/>
              <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username:
                <input id="username" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk"  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleInputChange}/>
                  </label> */}
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button type="button" onClick={handleSaveClick}>
                Save
              </button>
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
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
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
        </div>

      </div>
    )
  }
  return <UserProfile />;

}
