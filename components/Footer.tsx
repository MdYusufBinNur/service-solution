'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#b92d36] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Service</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b92d36] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b92d36] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b92d36] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#b92d36] transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-[#b92d36] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-[#b92d36] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/booking`} className="hover:text-[#b92d36] transition-colors">
                  {t('nav.booking')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-[#b92d36] transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/services/service`} className="hover:text-[#b92d36] transition-colors">
                  {t('services.items.service.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/repair`} className="hover:text-[#b92d36] transition-colors">
                  {t('services.items.repair.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/tires`} className="hover:text-[#b92d36] transition-colors">
                  {t('services.items.tires.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/electrical`} className="hover:text-[#b92d36] transition-colors">
                  {t('services.items.electrical.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/ac`} className="hover:text-[#b92d36] transition-colors">
                  {t('services.items.ac.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">{t('footer.address')}</div>
                  <div>{t('footer.addressText')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+8801815625375" className="hover:text-[#b92d36] transition-colors">
                    +8801815625375
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:trendybee30@gmail.com" className="hover:text-[#b92d36] transition-colors">
                    trendybee30@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">{t('footer.openingHours')}</div>
                  <div>{t('footer.mondayFriday')}: 08:00 - 17:00</div>
                  <div>{t('footer.saturday')}: 09:00 - 13:00</div>
                  <div>{t('footer.sunday')}: {t('footer.closed')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Service. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
