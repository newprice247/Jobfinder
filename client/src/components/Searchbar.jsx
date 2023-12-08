import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion"
 
export default function ButtonDefault() {
  return (
    <div>
          {/* Using 'motion' to animate the homepage, set as a div container with opening and closing motion.div tags */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ y: 70}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center items-center">
  
  <Button >Search Here</Button>
  
  <h1>blank text</h1>
    </motion.div>
    </div>
  );
}