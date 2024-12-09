import IconCard from './IconCard';

const TechStackSection = () => {
  const techStacks = [
    { icon: '🐍', label: 'Python' },
    { icon: '⚙️', label: 'Rails' },
    { icon: '⚛️', label: 'React' },
    { icon: '🌐', label: 'Next.js' },
    { icon: '🛠️', label: 'TypeScript' },
    { icon: '📄', label: 'HTML' },
    { icon: '🎨', label: 'CSS' },
    { icon: '📜', label: 'JavaScript' },
    { icon: '💅', label: 'TailwindCSS' },
    { icon: '🐳', label: 'Docker' },
    { icon: '🐙', label: 'GitHub' },
    { icon: '🔧', label: 'Git' },
    { icon: '🖥️', label: 'VSCode' },
  ];

  return (
    <section className="py-8 bg-gray-900 text-white">
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
