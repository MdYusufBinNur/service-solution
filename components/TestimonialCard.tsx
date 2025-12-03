'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
  delay?: number;
}

export default function TestimonialCard({ name, rating, text, date, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <div className="w-12 h-12 bg-[#153a80] rounded-full flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
      </div>
    </motion.div>
  );
}
