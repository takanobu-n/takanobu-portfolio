'use client';

import { useState, useEffect } from 'react';

export default function WelcomeScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 初期状態でスクロール無効化
    document.body.style.overflow = 'hidden';

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // 2秒後にフェードアウト開始

    const hideWelcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      document.body.style.overflow = 'auto'; // Welcome画面終了後スクロール有効化
    }, 3000); // 3秒後にWelcome画面を完全に非表示

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideWelcomeTimer);
      document.body.style.overflow = 'auto'; // クリーンアップ時もスクロール有効化
    };
  }, []);

  return showWelcome ? (
    <div
      className={`flex items-center justify-center h-screen w-full bg-black text-white transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1
        className={`text-white font-extrabold transition-transform duration-2000 ${
          fadeOut ? 'scale-50' : 'scale-150'
        }`}
        style={{
          fontSize: 'clamp(2rem, 10vw, 5rem)', // フォントサイズ調整
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
