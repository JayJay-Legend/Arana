import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Functions from './pages/Functions';
import Commands from './pages/Commands';
import Terms from './pages/Terms';
import VoteButton from './components/VoteButton';
import Loading from './components/Loading';
import { useTheme } from './contexts/ThemeContext';
import './i18n';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [serverCount, setServerCount] = useState<string>("515+");
  const [memberCount, setMemberCount] = useState<string>("156.000+");
  const { theme } = useTheme();

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 600);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [theme]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Initial loading
  }, []);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen bg-background text-text transition-colors duration-300 ${theme}`}>
        <Header />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.main
              key="content"
              className="flex-grow container mx-auto px-4 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home serverCount={serverCount} memberCount={memberCount} />} />
                <Route path="/functions" element={<Functions />} />
                <Route path="/commands" element={<Commands />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </motion.main>
          )}
        </AnimatePresence>
        <Footer />
        <VoteButton />
      </div>
    </Router>
  );
};

export default App;