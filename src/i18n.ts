import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Remove HttpApi import
// import HttpApi from 'i18next-http-backend';

// Import resources directly from within src
import esTranslation from './messages/es.json'; // Corrected path
import enTranslation from './messages/en.json'; // Corrected path

i18n
  // Remove backend
  // .use(HttpApi)
  .use(initReactI18next)
  .init({
    // Debug output in console
    debug: true, // Turn off in production
    // Default language
    fallbackLng: 'es', 
    // Current language
    lng: 'es', // Or detect from browser: https://github.com/i18next/i18next-browser-languageDetector
    // Load resources directly
    resources: {
      es: { // Spanish resources
        Navbar: esTranslation.Navbar,      
        HeroSection: esTranslation.HeroSection,
        VentureStudioSection: esTranslation.VentureStudioSection,
        ProjectsSection: esTranslation.ProjectsSection,
        ProductFeatureSection: esTranslation.ProductFeatureSection,
        ContactSection: esTranslation.ContactSection,
        Footer: esTranslation.Footer,
        NotFound: esTranslation.NotFound
      },
      en: { // English resources
        Navbar: enTranslation.Navbar,      
        HeroSection: enTranslation.HeroSection,
        VentureStudioSection: enTranslation.VentureStudioSection,
        ProjectsSection: enTranslation.ProjectsSection,
        ProductFeatureSection: enTranslation.ProductFeatureSection,
        ContactSection: enTranslation.ContactSection,
        Footer: enTranslation.Footer,
        NotFound: enTranslation.NotFound
      }
    },
    // No longer need backend configuration
    // backend: {
    //   loadPath: '/messages/{{lng}}.json',
    // },
    // Define all namespaces that should be loaded
    ns: [
      'Navbar', 
      'HeroSection', 
      'VentureStudioSection', 
      'ProjectsSection', 
      'ProductFeatureSection',
      'ContactSection',
      'Footer',
      'NotFound'
    ], 
    defaultNS: 'Navbar', 
    // React specific configuration
    react: {
      useSuspense: true, // Set to true if using React Suspense
    },
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n; 