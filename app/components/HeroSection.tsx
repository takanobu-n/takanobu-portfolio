import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center bg-gray-800 text-white py-8">
      <Image
        src="/tra_rab.jpg" // プロジェクトの `public` ディレクトリに画像を保存
        alt="Profile Icon"
        width={120}
        height={120}
        className="rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-2 text-sm text-gray-300">
        Web Developer | Vim Enthusiast | Dark Mode Advocate
      </p>
    </section>
  );
};

export default HeroSection;
