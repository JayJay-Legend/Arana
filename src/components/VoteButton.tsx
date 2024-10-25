import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VoteButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.a
      href="https://top.gg/bot/1071825122467524688"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ThumbsUp size={20} />
      <span>{t('voteOnTopGG')}</span>
    </motion.a>
  );
};

export default VoteButton;