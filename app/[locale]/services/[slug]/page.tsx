'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  Euro,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import PageHero from '@/components/PageHero';

const serviceDetails: Record<string, any> = {
  service: {
    features: [
      'Komplet olieservice med filterskift',
      'Kontrol af alle væsker',
      'Eftersyn af bremser og dæk',
      'Tjek af lys og elektronik',
      'OBD fejlkodeudlæsning',
      'Servicelogbog opdatering'
    ],
    duration: '2-3 timer',
    price: 'Fra 1.495 kr.'
  },
  repair: {
    features: [
      'Motorreparation og udskiftning',
      'Bremsesystem service og reparation',
      'Koblingsskift',
      'Gearkasse reparation',
      'Støddæmpere og affjedring',
      'Udstødningssystem'
    ],
    duration: 'Varierer efter opgave',
    price: 'Efter tilbud'
  },
  tires: {
    features: [
      'Dækskift og montering',
      'Hjulbalancering',
      'Hjulskift',
      'Dækopbevaring',
      'TPMS service',
      'Punktering reparation'
    ],
    duration: '30-60 minutter',
    price: 'Fra 399 kr.'
  },
  electrical: {
    features: [
      'Fejlfinding i elektriske systemer',
      'Batteri test og udskiftning',
      'Generator service',
      'Startmotor reparation',
      'Kabelføring og ledningsnet',
      'Elektronik fejldiagnose'
    ],
    duration: '1-4 timer',
    price: 'Fra 695 kr.'
  },
  ac: {
    features: [
      'Aircondition service',
      'Kølemiddel påfyldning',
      'Kompressor test',
      'Klimaanlæg rensning',
      'Lækagesøgning',
      'Pollenfilter udskiftning'
    ],
    duration: '1-2 timer',
    price: 'Fra 895 kr.'
  },
  inspection: {
    features: [
      'Periodisk syn klargøring',
      'Syn og omregistrering',
      'Rustbehandling dokumentation',
      'Lygteindstilling',
      'Bremsekontrol',
      'Emissionskontrol'
    ],
    duration: '1-2 timer',
    price: 'Fra 595 kr.'
  }
};

export default function ServiceDetailPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;
  const slug = params.slug as string;

  const service = serviceDetails[slug] || serviceDetails.service;
  const title = t(`services.items.${slug}.title`);
  const description = t(`services.items.${slug}.description`);

  return (
    <>
      <PageHero title={title} subtitle={description} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Om denne service</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {description} Vores erfarne mekanikere sikrer, at din bil får den bedste behandling
                  med brug af kvalitetsdele og moderne udstyr.
                </p>

                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Hvad er inkluderet</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-[#b92d36] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="w-12 h-12 bg-[#153a80] rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Forventet tid</div>
                      <div className="font-bold text-gray-900">{service.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="w-12 h-12 bg-[#b92d36] rounded-lg flex items-center justify-center">
                      <Euro className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Pris</div>
                      <div className="font-bold text-gray-900">{service.price}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#153a80] p-6 rounded-r-xl">
                  <p className="text-gray-700">
                    <strong>Note:</strong> All prices are indicative. We always provide a precise quote
                    before work begins. Book online and get 10% discount.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="bg-gradient-to-br from-[#153a80] to-[#1a4a9d] rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Book denne service</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>10% online rabat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>12 måneders garanti</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Certificerede mekanikere</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Originale dele</span>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/booking`}
                    className="block w-full bg-[#b92d36] text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-[#a02630] transition-colors mb-4"
                  >
                    Book tid online
                  </Link>
                  <a
                    href="tel:+8801815625375"
                    className="block w-full bg-white/10 backdrop-blur-sm text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border-2 border-white/20"
                  >
                    Ring og book
                  </a>
                </div>

                <div className="mt-8 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Kontakt os</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <a href="tel:+8801815625375" className="text-gray-600 hover:text-[#b92d36]">
                          +8801815625375
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a href="mailto:trendybee30@gmail.com" className="text-gray-600 hover:text-[#b92d36]">
                          trendybee30@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#b92d36] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Address</div>
                        <div className="text-gray-600">
                          411 R/A, Agrabad<br />
                          Chattogram
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
