import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap border-t border-blue-gray-50 py-6 text-center md:justify-between bg-myColor-1">
      <div className="flex flex-col w-full items-center justify-center">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 JobFinder
        </Typography>
        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
