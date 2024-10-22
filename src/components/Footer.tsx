import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="bg-gray-800 text-white p-4 mt-8"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Arana. {t('allRightsReserved')}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;