import { FaPython, FaReact, FaDocker, FaGit, FaGithub } from 'react-icons/fa';
import { SiRubyonrails, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';
import IconCard from './IconCard';

const TechStackSection = () => {
  const techStacks = [
    { icon: FaPython, label: 'Python' },
    { icon: SiRubyonrails, label: 'Rails' },
    { icon: FaReact, label: 'React' },
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiHtml5, label: 'HTML' },
    { icon: SiCss3, label: 'CSS' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiTailwindcss, label: 'TailwindCSS' },
    { icon: FaDocker, label: 'Docker' },
    { icon: FaGithub, label: 'GitHub' },
    { icon: FaGit, label: 'Git' },
    { icon: SiVisualstudiocode, label: 'VSCode' },
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
