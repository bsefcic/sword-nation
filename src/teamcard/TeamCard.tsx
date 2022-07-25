import React, { useState } from 'react';

import { motion } from 'framer-motion';

type ITeamCardProps = {
  name: string;
  position: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const TeamCard = (props: ITeamCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center align-center bg-primary-500 px-16 pt-8">
      <motion.div
        transition={{ layout: { duration: 1, type: 'spring' } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-12 py-16 rounded-3xl shadow-2xl w-full  md:w-2/3"
      >
        <motion.div
          layout="position"
          className="grid grid-cols-2 justify-items-end"
        >
          <img
            className="mt-5 sm:mt-0 sm:ml-3 w-28 h-28 rounded-full bg-primary-500 self-center justify-self-center"
            src={props.image.src}
            alt={props.image.alt}
          />
          <div className="pt-5 justify-self-start pl-5">
            <p className="font-bold text-gray-800">{props.name}</p>
            <p className="font-normal italic text-gray-600">{props.position}</p>
          </div>
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=""
          >
            <p className="pt-8 leading-6 indent-8 text-gray-900">
              {props.description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export { TeamCard };
