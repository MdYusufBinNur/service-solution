'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Users,
  Target,
  Heart,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

export default function AboutPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  const values = [
    {
      icon: Award,
      title: t('aboutPage.values.quality'),
      description: t('aboutPage.values.qualityDesc')
    },
    {
      icon: Heart,
      title: t('aboutPage.values.trust'),
      description: t('aboutPage.values.trustDesc')
    },
    {
      icon: Target,
      title: t('aboutPage.values.expertise'),
      description: t('aboutPage.values.expertiseDesc')
    },
    {
      icon: Users,
      title: t('aboutPage.values.service'),
      description: t('aboutPage.values.serviceDesc')
    }
  ];

  const milestones = [
    { year: '1995', title: 'Grundlagt', description: 'Service åbnede dørene' },
    { year: '2005', title: 'Ekspansion', description: 'Udvidelse af værksted og team' },
    { year: '2015', title: '20 års jubilæum', description: '10.000+ biler serviceret' },
    { year: '2024', title: 'I dag', description: 'Førende bilservice i området' }
  ];

  return (
    <>
      <PageHero
        title={t('aboutPage.title')}
        subtitle={t('aboutPage.subtitle')}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.mission.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('aboutPage.mission.description')}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-gray-200">{t('about.experience')}</div>
                </div>
                <div className="bg-gradient-to-br from-[#b92d36] to-[#a02630] rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-gray-200">{t('about.customers')}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#b92d36] to-[#a02630] rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-3xl h-96 flex items-center justify-center">
                <Shield className="w-48 h-48 text-white opacity-20" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {t('aboutPage.values.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#b92d36] to-[#a02630] rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('aboutPage.story.title')}
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b92d36] to-[#153a80] transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md inline-block">
                      <div className="text-3xl font-bold text-[#b92d36] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <div className="w-4 h-4 bg-[#b92d36] rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutPage.story.content')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutPage.team.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('aboutPage.team.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Mechanics', 'Service', 'Management'].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-2xl p-8 text-white text-center"
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vores {role}</h3>
                <p className="text-gray-200">Experienced and certified professionals</p>
              </motion.div>
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
    </>
  );
}
