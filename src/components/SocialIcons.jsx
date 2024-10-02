import React from 'react';
import { motion } from 'framer-motion';
import { FaSquareGithub, FaSquareXTwitter, FaRedditSquare, FaMastodon } from 'react-icons/fa6';
import { SiMatrix } from 'react-icons/si';
import { MdEmail, MdKey } from 'react-icons/md';

const iconVariants = {
  hidden: { scale: 0 },
  visible: i => ({
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1 + (i * 0.1)
    }
  })
};

const SocialIcon = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-white hover:text-gray-300 transition-colors"
    variants={iconVariants}
    custom={label === 'GitHub' ? 0 : label === 'Twitter' ? 1 : 2}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.2 }}
  >
    <Icon size={24} />
    <span className="sr-only">{label}</span>
  </motion.a>
);

export const SocialIcons = () => (
  <div className="flex flex-col items-center">
    <div className="flex justify-center mb-4">
      <SocialIcon href="https://github.com/yourusername" icon={FaSquareGithub} label="GitHub" />
      <SocialIcon href="https://twitter.com/yourusername" icon={FaSquareXTwitter} label="Twitter" />
      <SocialIcon href="https://reddit.com/user/yourusername" icon={FaRedditSquare} label="Reddit" />
      <SocialIcon href="https://mastodon.social/@yourusername" icon={FaMastodon} label="Mastodon" />
      <SocialIcon href="https://matrix.to/#/@yourusername:matrix.org" icon={SiMatrix} label="Matrix" />
    </div>
    <div className="flex items-center text-white">
      <MdEmail className="mr-2" />
      <span>email@example.com</span>
    </div>
    <div className="flex items-center text-white mt-2">
      <MdKey className="mr-2" />
      <span>PGP: 0123 4567 89AB CDEF</span>
    </div>
  </div>
);