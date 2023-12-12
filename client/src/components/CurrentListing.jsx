// prototype for current listing, will be used to display current listing on home page
export default function CurrentListing(props) {
  return (
    <>
      <div className="border-2 p-8 rounded-lg bg-myColor-1/50 opacity-85  text-myColor-2 font-mono whitespace-pre-line">
        <div className="bg-myColor-7 border-8 border-myColor-2/75 rounded-md p-4 shadow-xl overflow-auto no-scrollbar">
          <h1 className="font-bold tracking-wide text-center underline font-mono uppercase">
            {props.title}
          </h1>
          <br />
          <h2 className="font-bold">Category:</h2>
          <p className="indent-8 mb-3">{props.category}</p>
          <h2 className="font-bold">Location:</h2>
          <p className="indent-8 mb-3">{props.location}</p>
          <h2 className="font-bold">Description:</h2>
          <p className="indent-8 mb-3">{props.description}</p>
          <h2 className="font-bold">Requirements:</h2>
          <p className="indent-8 mb-3">{props.requirements}</p>
          <h2 className="font-bold">Salary:</h2>
          <p className="indent-8 mb-3">{props.salary}</p>
          <h2 className="font-bold">Benefits:</h2>
          <p className="indent-8 mb-3">{props.benefits}</p>
          <h2 className="font-bold">Company:</h2>
          <p className="indent-8 mb-3">{props.company}</p>
          <h2 className="font-bold">Email:</h2>
          <p className="indent-8 mb-3">{props.email}</p>
          <h2 className="font-bold">Phone:</h2>
          <p className="indent-8 mb-3">{props.phone}</p>
          <h2 className="font-bold">Website:</h2>
          <p className="indent-8 mb-3">{props.website}</p>
        </div>
      </div>
    </>
  );
}
