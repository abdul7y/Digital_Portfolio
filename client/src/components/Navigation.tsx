import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Handle scroll effect for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Handle active section highlighting
    const handleSectionHighlight = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setIsMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionHighlight);
    document.addEventListener('click', handleNavClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionHighlight);
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`} 
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with enhanced styling */}
          <div className="flex items-center space-x-3" data-testid="logo">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-blue to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent">
                Abdullah Ali
              </h1>
              <p className="text-xs text-gray-500 font-medium">Software Engineer</p>
            </div>
          </div>
          
          {/* Desktop Navigation with advanced styling */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-primary-blue'
                    : 'text-gray-600 hover:text-primary-blue'
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-blue to-blue-600 transform origin-left transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100071575989138"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                data-testid="social-facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                data-testid="social-linkedin"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                data-testid="social-github"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary-blue to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              data-testid="cta-button"
            >
              Hire Me
            </a>
          </div>
          
          {/* Mobile menu button with enhanced animation */}
          <button 
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <span 
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
        
        {/* Advanced Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          data-testid="mobile-menu"
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 rounded-b-2xl mx-4 mb-4 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`block py-3 px-4 text-gray-600 hover:text-primary-blue hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id ? 'text-primary-blue bg-blue-50' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100071575989138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    data-testid="mobile-social-facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                    data-testid="mobile-social-linkedin"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors"
                    data-testid="mobile-social-github"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
                
                <a
                  href="#contact"
                  className="w-full bg-gradient-to-r from-primary-blue to-blue-600 text-white py-3 rounded-lg font-medium text-center block hover:shadow-lg transition-all duration-300"
                  data-testid="mobile-cta-button"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
