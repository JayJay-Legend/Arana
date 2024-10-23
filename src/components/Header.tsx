import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Moon, Sun, Menu, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleThemeDropdown = () => {
    setIsThemeDropdownOpen(!isThemeDropdownOpen);
  };

  const toggleDarkMode = () => {
    setTheme(prevTheme => prevTheme.startsWith('dark') ? prevTheme.replace('dark', 'light') : prevTheme.replace('light', 'dark'));
  };

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme.startsWith(theme.split('-')[0]) ? newTheme : `${theme.split('-')[0]}-${newTheme}`);
    setIsThemeDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.theme-dropdown')) {
        setIsThemeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      className="bg-primary text-text p-4 relative z-50"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Arana</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-secondary transition-colors">{t('home')}</Link>
          <Link to="/functions" className="hover:text-secondary transition-colors">{t('functions')}</Link>
          <Link to="/commands" className="hover:text-secondary transition-colors">{t('commands')}</Link>
          <Link to="/terms" className="hover:text-secondary transition-colors">{t('terms')}</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <button onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')} className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center">
            <Globe size={20} />
            <span className="ml-2">{i18n.language === 'en' ? 'EN' : 'PT'}</span>
          </button>
          <div className="relative theme-dropdown">
            <motion.button
              onClick={toggleThemeDropdown}
              className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center"
              whileTap={{ scale: 0.95 }}
            >
              {theme.startsWith('dark') ? <Moon size={20} /> : <Sun size={20} />}
              <motion.div
                animate={{ rotate: isThemeDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} className="ml-1" />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {isThemeDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 py-2 w-48 bg-card rounded-md shadow-xl z-50"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-text hover:bg-primary"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{theme.startsWith('dark') ? 'Light Mode' : 'Dark Mode'}</span>
                    {theme.startsWith('dark') ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.button>
                  <hr className="my-2 border-text opacity-20" />
                  {['default', 'blue', 'orange', 'purple', 'green', 'red'].map((themeOption) => (
                    <motion.button
                      key={themeOption}
                      onClick={() => changeTheme(themeOption)}
                      className={`block px-4 py-2 text-sm capitalize text-text hover:bg-primary w-full text-left ${theme.endsWith(themeOption) ? 'bg-primary' : ''}`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {themeOption}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden bg-card mt-4 p-4 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="block py-2 hover:text-secondary transition-colors" onClick={toggleMobileMenu}>{t('home')}</Link>
            <Link to="/functions" className="block py-2 hover:text-secondary transition-colors" onClick={toggleMobileMenu}>{t('functions')}</Link>
            <Link to="/commands" className="block py-2 hover:text-secondary transition-colors" onClick={toggleMobileMenu}>{t('commands')}</Link>
            <Link to="/terms" className="block py-2 hover:text-secondary transition-colors" onClick={toggleMobileMenu}>{t('terms')}</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
