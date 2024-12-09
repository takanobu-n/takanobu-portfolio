import HeroSection from './components/HeroSection';
import QualificationSection from './components/QualificationSection';
import TechStackSection from './components/TechStackSection';
import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          自己紹介
        </h1>
        <p className="mb-4">
          {`某ゼネコン社内SEです。
          普段はrailsを利用したシステムの開発・保守担当をしてます。
          新卒3年目です。
          大学時代はオペレーションリサーチを学習してました。
          趣味でnext.js触っています。`}
        </p>
      </section>

      {/* Qualification Section */}
      <QualificationSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Blog Posts Section */}
      <div className="my-8">
        <BlogPosts />
      </div>
    </main>
  );
}
