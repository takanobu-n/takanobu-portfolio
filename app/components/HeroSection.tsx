import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center text-white py-8 px-4">
      <div className="rounded-full p-2">
        <Image
          src="/training_rabbit.jpg"
          alt="Profile Icon"
          width={240}
          height={240}
          className="rounded-full"
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">Nakaoka Takanobu</h1>
      {/* <p className="mt-2 text-sm text-gray-300">
        Web Developer | Vim Enthusiast | Dark Mode Advocate
      </p> */}
    </section>
  );
};

export default HeroSection;
