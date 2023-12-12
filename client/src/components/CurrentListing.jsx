import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

// prototype for current listing, will be used to display current listing on home page
export default function CurrentListing(props) {
  return (
    <>
      <div className="border-2 p-8 rounded-lg bg-myColor-1/50 opacity-85  text-myColor-2 font-sans whitespace-pre-line">
        <div className="bg-myColor-7 border-8 border-myColor-2/75 rounded-md p-4 shadow-xl overflow-auto no-scrollbar">
          <h1 className="font-bold tracking-wide text-center underline uppercase">
            {props.title}
          </h1>
          <br />
          <h2>Category:</h2>
          <p className="indent-8 mb-3">{props.category}</p>
          <h2>Location:</h2>
          <p className="indent-8 mb-3">{props.location}</p>
          <h2>Description:</h2>
          <p className="indent-8 mb-3">{props.description}</p>
          <h2>Requirements:</h2>
          <p className="indent-8 mb-3">{props.requirements}</p>
          <h2>Salary:</h2>
          <p className="indent-8 mb-3">{props.salary}</p>
          <h2>Benefits:</h2>
          <p className="indent-8 mb-3">{props.benefits}</p>
          <h2>Company:</h2>
          <p className="indent-8 mb-3">{props.company}</p>
          <h2>Email:</h2>
          <p className="indent-8 mb-3">{props.email}</p>
          <h2>Phone:</h2>
          <p className="indent-8 mb-3">{props.phone}</p>
          <h2>Website:</h2>
          <p className="indent-8 mb-3">{props.website}</p>
        </div>
      </div>
    </>
  );
}
