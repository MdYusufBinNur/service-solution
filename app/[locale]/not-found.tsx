'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'dk';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#153a80] via-[#1a4a9d] to-[#153a80] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold text-white mb-4"
          >
            404
          </motion.div>
          <div className="w-24 h-1 bg-[#b92d36] mx-auto mb-8" />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('notFound.title')}
        </h1>
        <p className="text-xl text-gray-200 mb-12 max-w-md mx-auto">
          {t('notFound.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center gap-3 bg-[#b92d36] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#a02630] transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            <Home className="w-5 h-5" />
            {t('notFound.button')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border-2 border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Gå tilbage
          </button>
        </div>
      </motion.div>
    </div>
  );
}
