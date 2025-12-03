'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wrench,
  Settings,
  Car,
  Zap,
  Wind,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Shield
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionTitle from '@/components/SectionTitle';
import CTABanner from '@/components/CTABanner';
import { useParams } from 'next/navigation';

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  const services = [
    {
      icon: Settings,
      title: t('services.items.service.title'),
      description: t('services.items.service.description'),
      href: `/${locale}/services/service`
    },
    {
      icon: Wrench,
      title: t('services.items.repair.title'),
      description: t('services.items.repair.description'),
      href: `/${locale}/services/repair`
    },
    {
      icon: Car,
      title: t('services.items.tires.title'),
      description: t('services.items.tires.description'),
      href: `/${locale}/services/tires`
    },
    {
      icon: Zap,
      title: t('services.items.electrical.title'),
      description: t('services.items.electrical.description'),
      href: `/${locale}/services/electrical`
    },
    {
      icon: Wind,
      title: t('services.items.ac.title'),
      description: t('services.items.ac.description'),
      href: `/${locale}/services/ac`
    },
    {
      icon: ClipboardCheck,
      title: t('services.items.inspection.title'),
      description: t('services.items.inspection.description'),
      href: `/${locale}/services/inspection`
    }
  ];

  const testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      text: 'Excellent service! The mechanics took great care of my car, and the price was fair. Highly recommended.',
      date: 'November 2024'
    },
    {
      name: 'Jane Smith',
      rating: 5,
      text: 'I have been using Service for several years. They are always helpful, honest, and deliver quality.',
      date: 'October 2024'
    },
    {
      name: 'Bob Johnson',
      rating: 5,
      text: 'Fast service and good communication. They found the problem quickly and fixed it the same day.',
      date: 'September 2024'
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#153a80] via-[#1a4a9d] to-[#153a80] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b92d36] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-[#b92d36] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {t('hero.discount')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/booking`}
                  className="inline-flex items-center justify-center gap-3 bg-[#b92d36] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a02630] transition-all duration-200 transform hover:scale-105 shadow-xl"
                >
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/20"
                >
                  {t('services.viewAll')}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b92d36] to-[#a02630] rounded-3xl blur-3xl opacity-30" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">25+</div>
                      <div className="text-gray-200">{t('about.experience')}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">5000+</div>
                      <div className="text-gray-200">{t('about.customers')}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center col-span-2">
                      <div className="text-3xl font-bold text-white mb-2">{t('about.warranty')}</div>
                      <div className="text-gray-200">{t('about.quality')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b92d36] to-[#a02630] rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-3xl h-96 flex items-center justify-center">
                  <Car className="w-48 h-48 text-white opacity-20" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.description')}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#b92d36] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{t('about.experience')}</div>
                    <div className="text-gray-600 text-sm">Erfarne mekanikere</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#153a80] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{t('about.customers')}</div>
                    <div className="text-gray-600 text-sm">Tilfredse kunder</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#b92d36] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{t('about.quality')}</div>
                    <div className="text-gray-600 text-sm">Højeste standard</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#153a80] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{t('about.warranty')}</div>
                    <div className="text-gray-600 text-sm">På alt arbejde</div>
                  </div>
                </div>
              </div>

              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 text-[#b92d36] font-semibold hover:gap-3 transition-all"
              >
                Læs mere om os
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        buttonText={t('cta.button')}
        buttonHref={`/${locale}/booking`}
        locale={locale}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600">We work with the best brands</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes', 'Audi'].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-24"
              >
                <div className="text-gray-400 font-bold text-lg">{brand}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
