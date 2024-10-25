import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface HomeProps {
  serverCount: number | string;
  memberCount: number | string;
}

const Home: React.FC<HomeProps> = ({ serverCount, memberCount }) => {
  const { t } = useTranslation();

  const formatNumber = (value: number | string) => {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return value;
  };

  return (
    <div className="text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('welcomeToArana')}
      </motion.h1>
      <motion.img
        src="https://i.imgur.com/rzo4Kj7.png"
        alt="Arana Bot"
        className="w-64 h-64 mx-auto mb-4 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('aranaDescription')}
      </motion.p>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="https://discord.com/application-directory/1071825122467524688"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {t('inviteBot')}
        </a>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="bg-card p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{t('serverCount')}</h2>
          <p className="text-4xl font-bold text-primary">{formatNumber(serverCount)}</p>
        </div>
        <div className="bg-card p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{t('memberCount')}</h2>
          <p className="text-4xl font-bold text-primary">{formatNumber(memberCount)}</p>
        </div>
      </motion.div>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{t('supportServer')}</h2> 
        <div className="discord-widget">
          <iframe
            src="https://discord.com/widget?id=721005357672956007&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="mx-auto"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
