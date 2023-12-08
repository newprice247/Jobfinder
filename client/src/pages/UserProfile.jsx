import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  // pencil
} from "@heroicons/react/24/solid";

import Bio from "../components/Bio";
import search from "../../utils/API";
import Auth from "../../utils/auth";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const userId = Auth.getProfile().data._id;
  useEffect(() => {
    search.fetchUser(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);


  return (
    <>
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
              Job Listing
            </div>
          </Tab>
          <Tab value="savedJobs" className="place-items-start">
            <div className="flex items-center gap-2">
              {React.createElement(Cog6ToothIcon, { className: "w-5 h-5" })}
              Saved Jobs
            </div>
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="bio" className="py-0">
            <Bio 
            id={user._id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}

            />
          </TabPanel>
          <TabPanel value="jobListing" className="py-0">
            Job Listing
          </TabPanel>
          <TabPanel value="savedJobs" className="py-0">
            Saved Jobs
          </TabPanel>
        </TabsBody>
      </Tabs>
      <div>
        <a href="https://www.youtube.com/c/jamesqquick"
          className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/learnbuildteach/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </>
    
  );
}
