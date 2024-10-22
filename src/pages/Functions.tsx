import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Bot, Shield, Smile, Wrench, UserPlus, Image, MessageSquare, Zap, BarChart, Globe } from 'lucide-react';

const Functions: React.FC = () => {
  const { t } = useTranslation();

  const functions = [
    { title: t('aiAssistant'), description: t('aiAssistantDesc'), icon: Bot },
    { title: t('moderation'), description: t('moderationDesc'), icon: Shield },
    { title: t('funCommands'), description: t('funCommandsDesc'), icon: Smile },
    { title: t('utilities'), description: t('utilitiesDesc'), icon: Wrench },
    { title: t('roleplay'), description: t('roleplayDesc'), icon: UserPlus },
    { title: t('imageGeneration'), description: t('imageGenerationDesc'), icon: Image },
    { title: t('chatAnalysis'), description: t('chatAnalysisDesc'), icon: MessageSquare },
    { title: t('customCommands'), description: t('customCommandsDesc'), icon: Zap },
    { title: t('serverStats'), description: t('serverStatsDesc'), icon: BarChart },
    { title: t('multiLanguage'), description: t('multiLanguageDesc'), icon: Globe },
  ];

  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('botFunctions')}
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {functions.map((func, index) => (
          <motion.div
            key={index}
            className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <func.icon size={48} className="mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4 text-primary">{func.title}</h2>
            <p>{func.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Functions;