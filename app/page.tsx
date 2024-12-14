import HeroSection from './components/HeroSection';
import QualificationSection from './components/QualificationSection';
import TechStackSection from './components/TechStackSection';
// import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Qualification Section */}
      <QualificationSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Blog Posts Section */}
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </main>
  );
}
