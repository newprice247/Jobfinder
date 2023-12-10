import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Collapse, Card, Typography, CardBody } from "@material-tailwind/react";
import {}

export default function searchBar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleOpen = (section) =>
    setOpenSection((prevOpenSection) =>
      prevOpenSection === section ? null : section
    );

  return (
    <div className="flex flex-wrap items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 70 }}
        transition={{ delay: 0.5, duration: 0.5 }}>
        <div className="flex justify-evenly mb-8">
          {/* SEARCH BAR WILL BE ADDED HERE */}
          {/* <Button className='bg-green-800'>Search Here</Button> */}
          <div className="search-bar-container">
            <div className="input-wrapper">SearchBar</div>
            <div>SearchResults</div>
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
