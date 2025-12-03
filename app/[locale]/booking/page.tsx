'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  User,
  Phone,
  Mail,
  Car,
  Calendar,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function BookingPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carBrand: '',
    carModel: '',
    service: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submission:', formData);
    setStatus('success');
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        carBrand: '',
        carModel: '',
        service: '',
        date: '',
        message: ''
      });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <PageHero
        title={t('booking.title')}
        subtitle={t('booking.subtitle')}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Booking modtaget!</h3>
                <p className="text-green-700">{t('booking.form.success')}</p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl flex items-start gap-3"
            >
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Fejl</h3>
                <p className="text-red-700">{t('booking.form.error')}</p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('booking.form.name')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('booking.form.phone')} *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                      placeholder="+8801815625375"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('booking.form.email')} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('booking.form.carBrand')} *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="carBrand"
                      value={formData.carBrand}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                      placeholder="VW, BMW, Toyota..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('booking.form.carModel')} *
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                    placeholder="Golf, 320d, Corolla..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('booking.form.service')} *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                >
                  <option value="">Vælg service...</option>
                  <option value="service">Service & Eftersyn</option>
                  <option value="repair">Reparation</option>
                  <option value="tires">Dæk & Fælge</option>
                  <option value="electrical">Elektrisk Service</option>
                  <option value="ac">Aircondition</option>
                  <option value="inspection">Syn & Eftersyn</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('booking.form.date')} *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('booking.form.message')}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#b92d36] focus:outline-none transition-colors resize-none"
                    placeholder="Fortæl os om dit ønske..."
                  />
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#153a80] p-6 rounded-r-xl">
                <p className="text-sm text-gray-700">
                  <strong>Husk:</strong> Ved online booking får du automatisk 10% rabat på din service.
                  Vi kontakter dig inden for 24 timer for at bekræfte din tid.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b92d36] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a02630] transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {t('booking.form.submit')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-[#b92d36] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">10% Rabat</h3>
              <p className="text-gray-600 text-sm">Ved online booking</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-[#153a80] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Hurtig Svar</h3>
              <p className="text-gray-600 text-sm">Inden for 24 timer</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-[#b92d36] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">12 Måneders Garanti</h3>
              <p className="text-gray-600 text-sm">På alt arbejde</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
