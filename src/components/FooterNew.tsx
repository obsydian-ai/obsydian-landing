'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FooterNew = () => {
  const { t } = useTranslation('Footer');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/obsydianai/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  const services = [
    { key: 'auditingSolution', href: '/#services' },
    { key: 'aiDemandForecasting', href: '/#services' },
    { key: 'smartShipmentManager', href: '/#services' },
    { key: 'rateManagement', href: '/#services' },
    { key: 'customsAgentService', href: '/#services' },
    { key: 'reduceFreightCosts', href: '/#services' },
    { key: 'proactiveShipmentTracking', href: '/#services' },
    { key: 'logisticsDocumentInterpreter', href: '/#services' },
  ];  

  return (
    <footer className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo y redes sociales */}
          <div className="md:col-span-6">
            <Link to="/" className="inline-block">
                        <h2 className="text-5xl font-bold tracking-tighter">
            Obsydian<span style={{ color: '#83B0D9' }}>.</span>
          </h2>
            </Link>
            <div className="mt-8 flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <Link 
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      if (service.href.includes('services')) {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (service.href.includes('mission-section')) {
                        document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {t(service.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t('contact')}
            </h3>
            <a
              href="mailto:hello@obsydianai.com"
              className="text-gray-400 hover:text-white transition-all duration-300 inline-flex items-center group"
            >
              <span className="group-hover:underline">hello@obsydianai.com</span>
              <svg 
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-white/10 my-12" />

        {/* Copyright y enlaces legales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">© {currentYear} Obsydian. {t('allRightsReserved')}</p>
          <div className="flex space-x-8">
            <Link 
              to="/politica-privacidad" 
              className="hover:text-white transition-all duration-300"
            >
              {t('privacyPolicy')}
            </Link>
            <Link 
              to="/terminos-condiciones" 
              className="hover:text-white transition-all duration-300"
            >
              {t('termsConditions')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew; 