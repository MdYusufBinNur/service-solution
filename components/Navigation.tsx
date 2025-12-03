'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  return (
    <>
      <div className="bg-[#153a80] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+8801815625375" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{t('topBar.phone')}: +8801815625375</span>
            </a>
            <a href="mailto:trendybee30@gmail.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">{t('topBar.email')}: trendybee30@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">{t('topBar.hours')}</span>
            </div>
            <div className="flex gap-2">
              <Link
                href="/dk"
                className={`px-2 py-1 rounded ${locale === 'dk' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}
              >
                DK
              </Link>
              <Link
                href="/en"
                className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#b92d36] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-[#153a80]">Service</div>
                <div className="text-xs text-gray-600">{t('hero.subtitle')}</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#b92d36] font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/booking`}
                className="bg-[#b92d36] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a02630] transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                {t('nav.booking')}
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#b92d36] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-[#b92d36] font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/booking`}
                className="block text-center bg-[#b92d36] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a02630] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.booking')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
