'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    setStatus('success');
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <PageHero
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('contact.getInTouch')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('contact.description')}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b92d36] to-[#a02630] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+8801815625375" className="text-gray-600 hover:text-[#b92d36] transition-colors">
                      +8801815625375
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 08:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:trendybee30@gmail.com" className="text-gray-600 hover:text-[#b92d36] transition-colors">
                      trendybee30@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b92d36] to-[#a02630] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{t('contact.visitUs')}</h3>
                    <p className="text-gray-600">
                      411 R/A, Agrabad<br />
                      Chattogram<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div className="flex justify-between gap-8">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">08:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday:</span>
                        <span className="font-semibold">09:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday:</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency?</h3>
                <p className="text-gray-200 mb-6">
                  Call us immediately. We are ready to help you.
                </p>
                <a
                  href="tel:+8801815625375"
                  className="inline-block bg-[#b92d36] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a02630] transition-colors"
                >
                  Call Now: +8801815625375
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Besked sendt!</h3>
                    <p className="text-green-700">{t('contact.form.success')}</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl flex items-start gap-3"
                >
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Fejl</h3>
                    <p className="text-red-700">{t('contact.form.error')}</p>
                  </div>
                </motion.div>
              )}

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send os en besked</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                      placeholder="Dit navn"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                      placeholder="din@email.dk"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                      placeholder="Hvad drejer det sig om?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors resize-none"
                      placeholder="Skriv din besked her..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#b92d36] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a02630] transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Google Maps Integration</p>
                  <p className="text-gray-500 text-sm mt-2">Eksempelvej 123, 2300 København</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
