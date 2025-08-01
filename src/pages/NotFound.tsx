import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation('NotFound');

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 mb-4">{t('message')}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t('returnHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
