import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center text-white py-8 px-4">
      <div className="rounded-full p-2">
        <Image
          src="/training_rabbit.jpg"
          alt="Profile Icon"
          width={240}
          height={240}
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">Nakaoka Takanobu</h1>
      <div className="flex space-x-4 mt-4">
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
    </section>
  );
};

export default HeroSection;
