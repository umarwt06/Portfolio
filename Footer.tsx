import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Muhammad Umar</h3>
            <p className="text-gray-400">3D Artist | Animator | Designer</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Muhammad Umar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
