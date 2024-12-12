import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="text-white py-6 w-full">
      <div className="w-full">
        <ul className="flex justify-center space-x-8">
          <li>
            <a
              className="flex items-center transition-all hover:text-gray-400"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com"
            >
              <FaGithub size={24} />
              <span className="ml-2">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-blue-400"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com"
            >
              <FaXTwitter size={24} />
              <span className="ml-2">X</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-green-400"
              rel="noopener noreferrer"
              target="_blank"
              href="https://qiita.com"
            >
              <img
                src="/qiita-icon.png"
                alt="Qiita"
                className="w-6 h-6"
              />
              <span className="ml-2">Qiita</span>
            </a>
          </li>
        </ul>
        <p className="mt-4 text-center">
          © {new Date().getFullYear()} NAKAOKA TAKANOBU
        </p>
      </div>
    </footer>
  );
}
