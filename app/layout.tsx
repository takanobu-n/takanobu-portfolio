import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import ScrollToTopButton from './components/ScrollToTopButton';
import WelcomeScreen from './components/WelcomeScreen'; // Welcome画面を別コンポーネント化

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '仲岡誉修のポートフォリオ',
    template: '%s | 仲岡誉修のポートフォリオ',
  },
  description: '仲岡誉修のポートフォリオです。これまでの実績やスキル、プロジェクトについてご紹介しています。',
  openGraph: {
    title: '仲岡誉修のポートフォリオ',
    description: '仲岡誉修のポートフォリオです。これまでの実績やスキル、プロジェクトについてご紹介しています。',
    url: baseUrl,
    siteName: '仲岡誉修のポートフォリオ',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // `public/favicon.ico` を参照
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja" // 日本語対応
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-full mx-auto mt-8">
        <WelcomeScreen>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
            <Analytics />
            <SpeedInsights />
          </main>
        </WelcomeScreen>
      </body>
    </html>
  );
}
