'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white py-8 px-4">
      {/* ABOUT ME セクションタイトル（アニメーション付き） */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }} // 初期状態: 不透明度0で上からスライドイン
        animate={{ opacity: 1, y: 0 }} // アニメーション: 不透明度1で元の位置
        transition={{ duration: 1.5, ease: 'easeInOut' }} // アニメーションの詳細
      >
        {/* プロフィールアイコン */}
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden p-2">
            <Image
              src="/training_rabbit.png"
              alt="Profile Icon"
              width={240}
              height={240}
              className="rounded-full"
            />
          </div>

          {/* 名前 */}
          <h1 className="text-3xl font-bold mt-6">NAKAOKA TAKANOBU</h1>

          {/* SNSアイコン */}
          <div className="flex justify-center space-x-6 mt-6">
            {/* GitHub Icon and Link */}
            <a
              href="https://github.com/nakaokatakanobu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub size={30} />
            </a>
            {/* X (Twitter) Icon and Link */}
            <a
              href="https://x.com/nakaokatakanobu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaXTwitter size={30} />
            </a>
            {/* Qiita Icon and Link */}
            <a
              href="https://qiita.com/nakaokatakanobu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Qiita"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/qiita-icon.png"
                alt="Qiita Icon"
                width={30}
                height={30}
                className="rounded"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 自己紹介文 */}
      <p className="text-lg leading-relaxed mt-8 max-w-2xl">
        {`
        ゼネコンの社内SEとして、Ruby on Railsを用いたシステム開発・保守を担当しています。
        新卒入社3年目です。DX推進に取り組んでいます。
        大学時代はオペレーションリサーチ（数理最適化）を専攻し、遺伝的アルゴリズムを使ったマッチング最適に注力しました。
        趣味でNext.jsを活用した最新技術のキャッチアップを行い、個人開発にも挑戦中です。
        `}
      </p>
    </section>
  );
};

export default HeroSection;
