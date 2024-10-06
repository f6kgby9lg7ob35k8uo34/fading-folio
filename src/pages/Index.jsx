import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../components/SocialIcons';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
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