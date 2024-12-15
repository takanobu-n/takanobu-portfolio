'use client';

import { useState, useEffect } from 'react';

export default function WelcomeScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // ビューポートの高さを正確に設定
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // 2秒後にフェードアウト開始

    const hideWelcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // 3秒後にWelcome画面を完全に非表示

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideWelcomeTimer);
    };
  }, []);

  return showWelcome ? (
    <div
      className={`flex items-center justify-center h-[calc(var(--vh)*100)] w-full bg-black text-white transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1
        className={`text-white font-extrabold transition-transform duration-2000 ${
          fadeOut ? 'scale-50' : 'scale-150'
        }`}
        style={{
          fontSize: '10vw', // ビューポート幅に応じた文字サイズ
          textTransform: 'uppercase',
        }}
      >
        Welcome
      </h1>
    </div>
  ) : (
    <>{children}</>
  );
}
