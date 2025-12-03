import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['dk', 'en'],
  defaultLocale: 'en',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/(dk|en)/:path*']
};
