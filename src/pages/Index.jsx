import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../components/SocialIcons';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '50px 50px',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg relative z-10 max-w-md w-full"
      >
        <div className="text-center">
          <motion.img
            src="/placeholder.svg" // Replace with your actual photo
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
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
            className="text-xl text-blue-200 mb-4"
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
            <p className="text-blue-100">
              Passionate about creating beautiful and functional web experiences.
            </p>
            <p className="text-blue-100 mt-2">
              Always learning and exploring new technologies.
            </p>
          </motion.div>
          <SocialIcons />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;