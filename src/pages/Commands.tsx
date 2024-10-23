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
    { name: '/chat', description: t('chatDesc'), category: 'ai' },
    { name: '/imagine', description: t('imagineDesc'), category: 'ai' },
    { name: '/system-prompt', description: t('systempromptDesc'), category: 'ai' },
    { name: '/ban', description: t('banDesc'), category: 'moderation' },
    { name: '/unban', description: t('unbanDesc'), category: 'moderation' },
    { name: '/timeout', description: t('timeoutDesc'), category: 'moderation' },
    { name: '/untimeout', description: t('untimeoutDesc'), category: 'moderation' },
    { name: '/kick', description: t('kickDesc'), category: 'moderation' },
    { name: '/reset', description: t('resetDesc'), category: 'moderation' },
    { name: '/vale-tudo-ppt', description: t('pptDesc'), category: 'fun' },
    { name: '/beat-this', description: t('beatthisDesc'), category: 'fun' },
    { name: '/marbles', description: t('marblesDesc'), category: 'fun' },
    { name: '/wpm', description: t('wpmDesc'), category: 'fun' },
    { name: '/gay', description: t('gayDesc'), category: 'fun' },
    { name: '/memory', description: t('memoryDesc'), category: 'fun' },
    { name: '/ranking', description: t('rankingDesc'), category: 'fun' },
    { name: '/ratewaifu', description: t('ratewaifuDesc'), category: 'fun' },
    { name: '/roll', description: t('rollDesc'), category: 'fun' },
    { name: '/termo', description: t('termoDesc'), category: 'fun' },
    { name: '/tictactoe', description: t('tictactoeDesc'), category: 'fun' },
    { name: '/weather', description: t('weatherDesc'), category: 'utilities' },
    { name: '/userinfo', description: t('userinfoDesc'), category: 'utilities' },
    { name: '/serverinfo', description: t('serverinfoDesc'), category: 'utilities' },
    { name: '/servericon', description: t('servericonDesc'), category: 'utilities' },
    { name: '/avatar', description: t('avatarDesc'), category: 'utilities' },
    { name: '/banner', description: t('bannerDesc'), category: 'utilities' },
    { name: '/hex', description: t('hexDesc'), category: 'utilities' },
    { name: '/roblox-user', description: t('robloxuserDesc'), category: 'utilities' },
    { name: '/vote-reward', description: t('voterewardDesc'), category: 'utilities' },
    { name: '/tradutor', description: t('tradutorDesc'), category: 'utilities' },
    { name: '/rp-abraçar', description: t('abraçarDesc'), category: 'roleplay' },
    { name: '/rp-bater', description: t('baterDesc'), category: 'roleplay' },
    { name: '/rp-kiss', description: t('kissDesc'), category: 'roleplay' },
    { name: '/rp-cafuné', description: t('cafunéDesc'), category: 'roleplay' },
    { name: '/ship', description: t('shipDesc'), category: 'roleplay' },
    { name: '/random-imagem', description: t('imagemDesc'), category: 'images' },
    { name: '/random-fox', description: t('foxDesc'), category: 'images' },
    { name: '/random-cat', description: t('catDesc'), category: 'images' },
    { name: '/random-dog', description: t('dogDesc'), category: 'images' },
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
