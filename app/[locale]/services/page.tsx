'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import {
  Wrench,
  Settings,
  Car,
  Zap,
  Wind,
  ClipboardCheck
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';

export default function ServicesPage() {
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

  return (
    <>
      <PageHero
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
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
