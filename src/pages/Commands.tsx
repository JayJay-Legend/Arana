import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Commands: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('allCommands') },
    { id: 'ai', name: t('artificialIntelligence') },
    { id: 'moderation', name: t('moderation') },
    { id: 'fun', name: t('fun') },
    { id: 'utilities', name: t('utilities') },
    { id: 'roleplay', name: t('roleplay') },
    { id: 'images', name: t('images') },
  ];

  const commands = [
    { name: '/ask', description: t('askDesc'), category: 'ai' },
    { name: '/ban', description: t('banDesc'), category: 'moderation' },
    { name: '/joke', description: t('jokeDesc'), category: 'fun' },
    { name: '/weather', description: t('weatherDesc'), category: 'utilities' },
    { name: '/hug', description: t('hugDesc'), category: 'roleplay' },
    { name: '/generate', description: t('generateDesc'), category: 'images' },
  ];

  const filteredCommands = activeCategory === 'all'
    ? commands
    : commands.filter(cmd => cmd.category === activeCategory);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('botCommands')}
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            className={`m-2 px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-primary' : 'bg-card'} hover:bg-secondary transition-colors`}
            onClick={() => setActiveCategory(category.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          {filteredCommands.map((command, index) => (
            <motion.div
              key={command.name}
              className="bg-card p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">{command.name}</h2>
              <p>{command.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Commands;