'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  locale: string;
}

export default function CTABanner({ title, subtitle, buttonText, buttonHref, locale }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-[#153a80] to-[#1a4a9d] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-3 bg-[#b92d36] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a02630] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
