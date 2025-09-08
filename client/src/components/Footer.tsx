export default function Footer() {
  const socialLinks = [
    {
      icon: "fab fa-github",
      href: "https://github.com/abdul7y",
      label: "GitHub"
    },
    {
      icon: "fab fa-linkedin",
      href: "https://linkedin.com/in/abdullah-ali",
      label: "LinkedIn"
    },
    {
      icon: "fab fa-twitter",
      href: "https://twitter.com/abdullah_dev",
      label: "Twitter"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">
            Abdullah Ali
          </h3>
          <p className="text-gray-400 mb-6" data-testid="footer-title">
            Full-Stack & DevOps Engineer
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
                data-testid={`social-link-${index}`}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          <p className="text-gray-400" data-testid="footer-copyright">
            © 2024 Abdullah Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
