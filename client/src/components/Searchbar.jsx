import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  Collapse,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
 
export default function searchBar() {
  const [openSection, setOpenSection] = useState(null);
 
  const toggleOpen = (section) => setOpenSection((prevOpenSection) => (prevOpenSection === section ? null : section));

  return (
    <div>
      {/* Using 'motion' to animate the homepage, set as a div container with opening and closing motion.div tags */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 70 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap gap-3 justify-center items-center">
  
        <Button>Search Here</Button>

        <Button onClick={() => toggleOpen(1)}>Job Category 1</Button>
        <Collapse open={openSection === 1}>
          <Card className="my-4 mx-auto w-8/12">
            <CardBody>
              <Typography>Job category 1 listings: food/beverage, retail, etc.</Typography>
            </CardBody>
          </Card>
        </Collapse>

        <Button onClick={() => toggleOpen(2)}>Job Category 2</Button>
        <Collapse open={openSection === 2}>
          <Card className="my-4 mx-auto w-8/12">
            <CardBody>
              <Typography>Job category 2 listings: technology, healthcare, etc.</Typography>
            </CardBody>
          </Card>
        </Collapse>
      </motion.div>
    </div>
  );
}
