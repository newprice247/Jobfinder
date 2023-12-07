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

} from '@material-tailwind/react';

// prototype for current listing, will be used to display current listing on home page
export default function CurrentListing(props) {
    return (
        <>
            <div>
                <h1>{props.title}</h1><br />
                <h2>Location:</h2>
                <p>{props.location}</p>
                <h2>Description:</h2>
                <p>{props.description}</p>
                <h2>Requirements:</h2>
                <p>{props.requirements}</p>
                <h2>Salary:</h2>
                <p>{props.salary}</p>
                <h2>Benefits:</h2>
                <p>{props.benefits}</p>
                <h2>Company:</h2>
                <p>{props.company}</p>
                <h2>Email:</h2>
                <p>{props.email}</p>
                <h2>Phone:</h2>
                <p>{props.phone}</p>
                <h2>Website:</h2>
                <p>{props.website}</p>
                
            </div>
        </>
    )
}