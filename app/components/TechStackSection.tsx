import IconCard from './IconCard'; // 再利用可能なコンポーネントを活用

const TechStackSection = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">技術スタック</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <IconCard icon="🛠️" label="TypeScript" />
        <IconCard icon="⚛️" label="React" />
        <IconCard icon="🌐" label="Next.js" />
        <IconCard icon="🎨" label="TailwindCSS" />
      </div>
    </section>
  );
};

export default TechStackSection;
