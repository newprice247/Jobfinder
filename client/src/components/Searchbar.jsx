import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Collapse, Card, Typography, CardBody } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";

export default function searchBar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleOpen = (section) =>
    setOpenSection((prevOpenSection) =>
      prevOpenSection === section ? null : section
    );

  function handleSearch() {}

  return (
    <div className="flex flex-wrap items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 70 }}
        transition={{ delay: 0.5, duration: 0.5 }}>
        <div className="w-full">
          <div className="w-[80%] mx-auto text-black">
            <div className="w-full">
              <div className="relative flex items-center mb-6">
                <FaSearch className="absolute left-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for a job..."
                  onChange={handleSearch}
                  className="w-full h-10 pl-10 pr-3 text-sm bg-white border rounded-full focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS FOR FILTER CATEGORY - These will display after user types in search bar */}
        <div className="flex justify-center gap-3 mb-4">
          <Button onClick={() => toggleOpen(1)}>Job Category</Button>

          <Button onClick={() => toggleOpen(2)}>Location</Button>

          <Button onClick={() => toggleOpen(3)}>Pay</Button>
        </div>

        <div className="mb-4">
          <Collapse open={openSection === 1}>
            <Card className="my-4 mx-auto w-8/12">
              <CardBody>
                <Typography>
                  Job category 1 listings: food/beverage, retail, healthcare,
                  technology, etc.
                </Typography>
              </CardBody>
            </Card>
          </Collapse>

          <Collapse open={openSection === 2}>
            <Card className="my-4 mx-auto w-8/12">
              <CardBody>
                <Typography>checkbox with remote</Typography>
              </CardBody>
            </Card>
          </Collapse>

          <Collapse open={openSection === 3}>
            <Card className="my-4 mx-auto w-8/12">
              <CardBody>
                <Typography>pay rates</Typography>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </motion.div>
    </div>
  );
}
