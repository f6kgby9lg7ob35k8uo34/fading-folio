import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../components/SocialIcons';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.img
          src="/placeholder.svg" // Replace with your actual photo
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="text-4xl font-bold mb-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your Name
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 mb-4"
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
          <p className="text-gray-200">
            Passionate about creating beautiful and functional web experiences.
          </p>
          <p className="text-gray-200">
            Always learning and exploring new technologies.
          </p>
        </motion.div>
        <SocialIcons />
      </motion.div>
    </div>
  );
};

export default Index;