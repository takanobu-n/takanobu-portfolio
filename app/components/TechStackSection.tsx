'use client';

import { motion } from 'framer-motion';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGithub, FaGit } from 'react-icons/fa';
import { SiRubyonrails, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';
import IconCard from './IconCard';

const TechStackSection = () => {
  const techStacks = [
    { icon: <FaPython style={{ color: '#306998' }} />, label: 'Python' },
    { icon: <SiRubyonrails style={{ color: '#CC0000' }} />, label: 'Rails' },
    { icon: <FaReact style={{ color: '#61DAFB' }} />, label: 'React' },
    { icon: <SiNextdotjs style={{ color: '#000000' }} />, label: 'Next.js' },
    { icon: <SiTypescript style={{ color: '#3178C6' }} />, label: 'TypeScript' },
    { icon: <FaHtml5 style={{ color: '#E34F26' }} />, label: 'HTML' },
    { icon: <FaCss3Alt style={{ color: '#1572B6' }} />, label: 'CSS' },
    { icon: <SiJavascript style={{ color: '#F7DF1E' }} />, label: 'JavaScript' },
    { icon: <SiTailwindcss style={{ color: '#06B6D4' }} />, label: 'TailwindCSS' },
    { icon: <FaDocker style={{ color: '#2496ED' }} />, label: 'Docker' },
    { icon: <FaGithub style={{ color: '#181717' }} />, label: 'GitHub' },
    { icon: <FaGit style={{ color: '#F05032' }} />, label: 'Git' },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.h1
        className="mb-8 text-4xl font-bold text-center tracking-tight"
        initial={{ opacity: 0, x: 300, rotate: 0 }} // 初期状態: 左から回転しつつスライド
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
        TECH STACK
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techStacks.map((tech, index) => (
          <IconCard key={index} icon={tech.icon} label={tech.label} />
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
