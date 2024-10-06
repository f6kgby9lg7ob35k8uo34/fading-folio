import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../components/SocialIcons';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amoled-background relative overflow-hidden px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-amoled-background bg-opacity-50 backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-lg relative z-10 w-full max-w-sm sm:max-w-md border border-amoled-primary"
      >
        <div className="text-center">
          <motion.img
            src="/placeholder.svg" // Replace with your actual photo
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amoled-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          />
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-2 text-amoled-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your Name
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-amoled-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Web Developer & Designer
          </motion.p>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm sm:text-base text-amoled-text">
              Passionate about creating beautiful and functional web experiences.
            </p>
            <p className="text-sm sm:text-base text-amoled-text mt-2">
              Always learning and exploring new technologies.
            </p>
          </motion.div>
          <SocialIcons />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6"
          >
            <Button className="bg-amoled-primary text-amoled-background hover:bg-amoled-secondary">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;