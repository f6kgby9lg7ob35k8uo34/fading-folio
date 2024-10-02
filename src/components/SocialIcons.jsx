import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, MessageSquare } from 'lucide-react';

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
  <div className="flex justify-center">
    <SocialIcon href="https://github.com/yourusername" icon={Github} label="GitHub" />
    <SocialIcon href="https://twitter.com/yourusername" icon={Twitter} label="Twitter" />
    <SocialIcon href="https://reddit.com/user/yourusername" icon={MessageSquare} label="Reddit" />
    <SocialIcon href="https://mastodon.social/@yourusername" icon={MessageSquare} label="Mastodon" />
    <SocialIcon href="https://matrix.to/#/@yourusername:matrix.org" icon={MessageSquare} label="Matrix" />
  </div>
);