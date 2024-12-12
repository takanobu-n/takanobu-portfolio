import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGithub, FaGit } from 'react-icons/fa';
import { SiRubyonrails, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript } from 'react-icons/si';
import IconCard from './IconCard';

const TechStackSection = () => {
  const techStacks = [
    { icon: <FaPython style={{ color: '#306998' }} />, label: 'Python' }, // 青
    { icon: <SiRubyonrails style={{ color: '#CC0000' }} />, label: 'Rails' }, // 赤
    { icon: <FaReact style={{ color: '#61DAFB' }} />, label: 'React' }, // 青
    { icon: <SiNextdotjs style={{ color: '#000000' }} />, label: 'Next.js' }, // 黒
    { icon: <SiTypescript style={{ color: '#3178C6' }} />, label: 'TypeScript' }, // 青
    { icon: <FaHtml5 style={{ color: '#E34F26' }} />, label: 'HTML' }, // オレンジ
    { icon: <FaCss3Alt style={{ color: '#1572B6' }} />, label: 'CSS' }, // 青
    { icon: <SiJavascript style={{ color: '#F7DF1E' }} />, label: 'JavaScript' }, // 黄色
    { icon: <SiTailwindcss style={{ color: '#06B6D4' }} />, label: 'TailwindCSS' }, // 青緑
    { icon: <FaDocker style={{ color: '#2496ED' }} />, label: 'Docker' }, // 青
    { icon: <FaGithub style={{ color: '#181717' }} />, label: 'GitHub' }, // 黒
    { icon: <FaGit style={{ color: '#F05032' }} />, label: 'Git' }, // オレンジ
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">技術スタック</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techStacks.map((tech, index) => (
          <IconCard key={index} icon={tech.icon} label={tech.label} />
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
