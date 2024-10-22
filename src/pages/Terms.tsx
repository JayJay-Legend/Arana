import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  const termsContent = [
    { title: t('usage'), content: t('usageContent') },
    { title: t('privacyAndData'), content: t('privacyAndDataContent') },
    { title: t('generalProvisions'), content: t('generalProvisionsContent') },
    { title: t('botDowntime'), content: t('botDowntimeContent') },
    { title: t('emotionalDamage'), content: t('emotionalDamageContent') },
    { title: t('responsePreferences'), content: t('responsePreferencesContent') },
    { title: t('intellectualProperty'), content: t('intellectualPropertyContent') },
  ];

  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('termsOfService')}
      </motion.h1>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {termsContent.map((section, index) => (
          <motion.div
            key={index}
            className="bg-card p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">{section.title}</h2>
            <p className="whitespace-pre-line">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Terms;