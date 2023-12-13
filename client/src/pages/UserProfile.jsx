import React, { useEffect, useState } from "react";
// various styling imports
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
// component imports
import Bio from "../components/Bio";
import UserCreatedListings from "../components/UserCreatedListings";
import UserSavedListings from "../components/UserSavedListings";
// import authentification utility to manage current user jwt
import Auth from "../../utils/auth";
// import api utility to make api calls
import search from "../../utils/API";

export default function UserProfile() {
  // sets user state to empty object
  const [user, setUser] = useState({});
  // grabs current user id from jwt
  const userId = Auth.getProfile().data._id;
  // fetches user data from api then sets user state to data
  useEffect(() => {
    search.fetchUser(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);
  // renders user profile page
  return (
    <>
    {/* tabs that allow user to choose to display user bio, job listings, and saved jobs */}
      <Tabs value="bio" orientation="vertical">
        <TabsHeader className="w-40">
          <Tab value="bio" className="place-items-start">
            <div className="flex items-center gap-2">
              {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
              Bio
            </div>
          </Tab>
          <Tab value="jobListing" className="place-items-start">
            <div className="flex items-center gap-2">
              {React.createElement(UserCircleIcon, { className: "w-5 h-5" })}
              Job Listings
            </div>
          </Tab>
          <Tab value="savedJobs" className="place-items-start">
            <div className="flex items-center gap-2">
              {React.createElement(BriefcaseIcon, { className: "w-5 h-5" })}
              Saved Jobs
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody
        className="h-[200vh] mb-4"
        >
          <TabPanel value="bio" className="py-0">
            {/* renders user bio component with user data passed as props */}
            <Bio 
            id={user._id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            bio={user.bio}
            salaryExpectation={user.salaryExpectation}
            />
          </TabPanel>
          <TabPanel value="jobListing" className="py-5">
            <h2 className="text-myColor-2 text-xl">View or Manage your job listings:</h2>
            {/* renders user created listings component */}
            <UserCreatedListings />
          </TabPanel>
          <TabPanel value="savedJobs" className="py-0">
            <h2 className="text-myColor-2 text-xl font-bold p-3">My Saved Jobs:</h2>
            {/* renders user saved listings component */}
            <UserSavedListings />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
    
  );
}
