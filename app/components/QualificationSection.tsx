'use client';

import { motion } from 'framer-motion';

const QualificationSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <motion.h1
        className="mb-8 text-4xl font-bold text-center tracking-tight"
        initial={{ opacity: 0, x: -300, rotate: 0 }} // 初期状態: 左から回転しつつスライド
        whileInView={{ opacity: 1, x: 0, rotate: 0 }} // 表示時: 回転しながらスライドイン
        transition={{
          duration: 1.5, // アニメーションの時間を長く設定
          type: 'spring',
          bounce: 0.2, // 弾みを減らす
        }}
        viewport={{
          once: true, // 1回のみ実行
          margin: '-50% 0%', // 画面の50%の位置でトリガー
        }}
      >
        CERTIFICATIONS
      </motion.h1>
      <ul className="pl-6 space-y-2 text-center">
        <li>基本情報技術者試験</li>
        <li>応用情報技術者試験</li>
        <li>DBスペシャリスト</li>
        <li>G検定</li>
        <li>AWS 認定 Developer Associate</li>
      </ul>
    </section>
  );
};

export default QualificationSection;
