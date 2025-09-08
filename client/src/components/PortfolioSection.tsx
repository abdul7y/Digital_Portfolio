// Custom SVG illustrations for each case study
const HRPlatformIllustration = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <defs>
      <linearGradient id="hrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="400" height="240" fill="#F8FAFC" />
    {/* Dashboard */}
    <rect x="40" y="40" width="320" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    {/* Header */}
    <rect x="60" y="60" width="280" height="30" fill="url(#hrGradient)" rx="4" />
    <text x="70" y="78" fill="white" fontSize="12" fontWeight="bold">HR Management Dashboard</text>
    {/* Cards */}
    <rect x="70" y="110" width="80" height="60" fill="#EBF4FF" rx="6" />
    <rect x="160" y="110" width="80" height="60" fill="#EBF4FF" rx="6" />
    <rect x="250" y="110" width="80" height="60" fill="#EBF4FF" rx="6" />
    {/* Icons */}
    <circle cx="110" cy="130" r="8" fill="#3B82F6" />
    <circle cx="200" cy="130" r="8" fill="#10B981" />
    <circle cx="290" cy="130" r="8" fill="#F59E0B" />
    {/* Text */}
    <text x="85" y="155" fontSize="8" fill="#374151">Employees</text>
    <text x="180" y="155" fontSize="8" fill="#374151">Payroll</text>
    <text x="265" y="155" fontSize="8" fill="#374151">Attendance</text>
  </svg>
);

const ManufacturingIllustration = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <defs>
      <linearGradient id="mfgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="400" height="240" fill="#F0FDF4" />
    {/* Factory building */}
    <rect x="50" y="120" width="300" height="80" fill="#6B7280" />
    <rect x="70" y="100" width="40" height="100" fill="#9CA3AF" />
    <rect x="130" y="80" width="40" height="120" fill="#9CA3AF" />
    <rect x="190" y="90" width="40" height="110" fill="#9CA3AF" />
    <rect x="250" y="85" width="40" height="115" fill="#9CA3AF" />
    <rect x="310" y="95" width="30" height="105" fill="#9CA3AF" />
    {/* Monitoring screens */}
    <rect x="160" y="40" width="80" height="50" fill="#1F2937" rx="4" />
    <rect x="170" y="50" width="60" height="30" fill="url(#mfgGradient)" rx="2" />
    {/* Automation indicators */}
    <circle cx="100" cy="60" r="6" fill="#10B981" />
    <circle cx="120" cy="60" r="6" fill="#10B981" />
    <circle cx="140" cy="60" r="6" fill="#F59E0B" />
    {/* Production line */}
    <line x1="80" y1="140" x2="320" y2="140" stroke="#3B82F6" strokeWidth="3" />
    <rect x="100" y="135" width="10" height="10" fill="#3B82F6" />
    <rect x="150" y="135" width="10" height="10" fill="#3B82F6" />
    <rect x="200" y="135" width="10" height="10" fill="#3B82F6" />
    <rect x="250" y="135" width="10" height="10" fill="#3B82F6" />
  </svg>
);

const MobilePartsIllustration = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <defs>
      <linearGradient id="ecomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#5B21B6" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="400" height="240" fill="#FAF5FF" />
    {/* E-commerce interface */}
    <rect x="60" y="40" width="280" height="160" fill="white" rx="8" stroke="#E5E7EB" strokeWidth="2" />
    {/* Header */}
    <rect x="80" y="60" width="240" height="25" fill="url(#ecomGradient)" rx="4" />
    <text x="90" y="75" fill="white" fontSize="10" fontWeight="bold">Mobile Parts Store</text>
    {/* Product grid */}
    <rect x="90" y="100" width="60" height="60" fill="#F3F4F6" rx="4" />
    <rect x="170" y="100" width="60" height="60" fill="#F3F4F6" rx="4" />
    <rect x="250" y="100" width="60" height="60" fill="#F3F4F6" rx="4" />
    {/* Mobile phones */}
    <rect x="105" y="115" width="15" height="25" fill="#1F2937" rx="2" />
    <rect x="125" y="115" width="15" height="25" fill="#1F2937" rx="2" />
    <rect x="185" y="115" width="15" height="25" fill="#1F2937" rx="2" />
    <rect x="205" y="115" width="15" height="25" fill="#1F2937" rx="2" />
    <rect x="265" y="115" width="15" height="25" fill="#1F2937" rx="2" />
    <rect x="285" y="115" width="15" height="25" fill="#1F2937" rx="2" />
    {/* Shopping cart */}
    <circle cx="300" cy="180" r="12" fill="#10B981" />
    <text x="295" y="185" fill="white" fontSize="12">🛒</text>
  </svg>
);

const RetailerIllustration = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <defs>
      <linearGradient id="retailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#BE185D" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="400" height="240" fill="#FDF2F8" />
    {/* Website mockup */}
    <rect x="50" y="30" width="300" height="180" fill="white" rx="8" stroke="#E5E7EB" strokeWidth="2" />
    {/* Navigation */}
    <rect x="70" y="50" width="260" height="20" fill="url(#retailGradient)" rx="4" />
    {/* Hero banner */}
    <rect x="70" y="80" width="260" height="60" fill="#FEE2E2" rx="4" />
    <text x="85" y="105" fontSize="14" fill="#BE185D" fontWeight="bold">Children's Fashion</text>
    <text x="85" y="125" fontSize="10" fill="#9CA3AF">Mobile-First Design</text>
    {/* Product showcase */}
    <rect x="80" y="155" width="70" height="40" fill="#F9FAFB" rx="4" />
    <rect x="165" y="155" width="70" height="40" fill="#F9FAFB" rx="4" />
    <rect x="250" y="155" width="70" height="40" fill="#F9FAFB" rx="4" />
    {/* Mobile responsive indicator */}
    <rect x="320" y="60" width="20" height="35" fill="#1F2937" rx="3" />
    <rect x="325" y="65" width="10" height="25" fill="#EC4899" rx="1" />
    {/* Analytics arrow */}
    <path d="M 100 210 L 130 210 L 125 205 M 130 210 L 125 215" stroke="#10B981" strokeWidth="2" fill="none" />
    <text x="135" y="215" fontSize="8" fill="#10B981">+32% Traffic</text>
  </svg>
);

const CloudKitchenIllustration = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <defs>
      <linearGradient id="foodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="400" height="240" fill="#FFFBEB" />
    {/* App interface */}
    <rect x="80" y="40" width="240" height="160" fill="white" rx="12" stroke="#E5E7EB" strokeWidth="2" />
    {/* Header */}
    <rect x="100" y="60" width="200" height="25" fill="url(#foodGradient)" rx="4" />
    <text x="110" y="75" fill="white" fontSize="10" fontWeight="bold">Cloud Kitchen Hub</text>
    {/* Restaurant cards */}
    <rect x="110" y="100" width="80" height="35" fill="#FEF3C7" rx="4" />
    <rect x="210" y="100" width="80" height="35" fill="#FEF3C7" rx="4" />
    <text x="120" y="115" fontSize="8" fill="#92400E">Italian Bistro</text>
    <text x="220" y="115" fontSize="8" fill="#92400E">Asian Fusion</text>
    <text x="120" y="125" fontSize="6" fill="#B45309">⭐ 4.8 Rating</text>
    <text x="220" y="125" fontSize="6" fill="#B45309">⭐ 4.9 Rating</text>
    {/* Order tracking */}
    <rect x="110" y="150" width="180" height="30" fill="#F3F4F6" rx="4" />
    <circle cx="130" cy="165" r="6" fill="#10B981" />
    <circle cx="160" cy="165" r="6" fill="#F59E0B" />
    <circle cx="190" cy="165" r="6" fill="#6B7280" />
    <text x="210" y="170" fontSize="8" fill="#374151">Order Status</text>
    {/* Delivery trucks */}
    <rect x="50" y="210" width="25" height="15" fill="#3B82F6" rx="2" />
    <circle cx="58" cy="230" r="4" fill="#1F2937" />
    <circle cx="67" cy="230" r="4" fill="#1F2937" />
    <rect x="320" y="210" width="25" height="15" fill="#3B82F6" rx="2" />
    <circle cx="328" cy="230" r="4" fill="#1F2937" />
    <circle cx="337" cy="230" r="4" fill="#1F2937" />
  </svg>
);

const NeurocromIllustration = () => (
  <svg viewBox="0 0 400 240" className="w-full h-full">
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="400" height="240" fill="#F5F3FF" />
    {/* AI Dashboard */}
    <rect x="50" y="30" width="300" height="180" fill="white" rx="8" stroke="#E5E7EB" strokeWidth="2" />
    {/* Header */}
    <rect x="70" y="50" width="260" height="25" fill="url(#aiGradient)" rx="4" />
    <text x="80" y="65" fill="white" fontSize="12" fontWeight="bold">NeuroCom AI Platform</text>
    {/* Neural network visualization */}
    <g>
      {/* Nodes */}
      <circle cx="100" cy="100" r="6" fill="#8B5CF6" />
      <circle cx="100" cy="130" r="6" fill="#8B5CF6" />
      <circle cx="100" cy="160" r="6" fill="#8B5CF6" />
      <circle cx="200" cy="115" r="6" fill="#06B6D4" />
      <circle cx="200" cy="145" r="6" fill="#06B6D4" />
      <circle cx="300" cy="130" r="6" fill="#10B981" />
      {/* Connections */}
      <line x1="106" y1="100" x2="194" y2="115" stroke="#A78BFA" strokeWidth="2" />
      <line x1="106" y1="130" x2="194" y2="115" stroke="#A78BFA" strokeWidth="2" />
      <line x1="106" y1="160" x2="194" y2="145" stroke="#A78BFA" strokeWidth="2" />
      <line x1="206" y1="115" x2="294" y2="130" stroke="#67E8F9" strokeWidth="2" />
      <line x1="206" y1="145" x2="294" y2="130" stroke="#67E8F9" strokeWidth="2" />
    </g>
    {/* Analytics panels */}
    <rect x="80" y="180" width="60" height="20" fill="#EDE9FE" rx="4" />
    <rect x="160" y="180" width="60" height="20" fill="#EDE9FE" rx="4" />
    <rect x="240" y="180" width="60" height="20" fill="#EDE9FE" rx="4" />
    <text x="95" y="192" fontSize="8" fill="#7C3AED">ML Models</text>
    <text x="175" y="192" fontSize="8" fill="#7C3AED">Analytics</text>
    <text x="255" y="192" fontSize="8" fill="#7C3AED">Insights</text>
  </svg>
);

export default function PortfolioSection() {
  const caseStudies = [
    {
      title: "NeuroCom",
      subtitle: "AI SaaS Platform for Intelligent Business Solutions",
      description: "Built a comprehensive AI-powered SaaS platform with machine learning models, real-time analytics, and intelligent automation capabilities.",
      result: "Delivered scalable AI infrastructure serving 10,000+ users with 99.9% uptime.",
      tech: "Next.js, Node.js, MongoDB, Docker",
      illustration: <NeurocromIllustration />
    },
    {
      title: "HR Platform",
      subtitle: "Digitizing HR Operations with a Custom Platform",
      description: "A growing company was struggling with manual HR processes. We built a centralized platform with automated payroll and attendance tracking.",
      result: "Reduced HR processing time by 50% and boosted employee satisfaction.",
      tech: "React, .NET, SQL Server",
      illustration: <HRPlatformIllustration />
    },
    {
      title: "Manufacturing Automation",
      subtitle: "Powering Smarter Manufacturing with Automation",
      description: "A manufacturing firm faced high costs and downtime. We developed custom automation and real-time monitoring.",
      result: "Downtime reduced by 45% and product consistency improved.",
      tech: "Node.js, Express, MongoDB, Kubernetes",
      illustration: <ManufacturingIllustration />
    },
    {
      title: "Shopify Store: Mobile Parts Distributor",
      subtitle: "Scaling a Wholesale Mobile Parts Distributor",
      description: "The mobile repair industry needed reliable, high-volume distribution. We built a scalable e-commerce platform with SEO focus.",
      result: "Achieved eBay Power Seller status and 30% repeat order rate.",
      tech: "Shopify, Next.js, PostgreSQL",
      illustration: <MobilePartsIllustration />
    },
    {
      title: "Global Retailer",
      subtitle: "Transforming a Global Retailer's Digital Presence",
      description: "A children's clothing brand faced slow checkout and stagnant traffic. We rebuilt their e-commerce with a mobile-first redesign.",
      result: "Organic traffic up by 32%, cart abandonment down by 25%.",
      tech: "React, Node.js, Docker, Cloud",
      illustration: <RetailerIllustration />
    },
    {
      title: "Cloud Kitchen App",
      subtitle: "Cloud Kitchen App for Modern Food Delivery",
      description: "Food businesses needed a flexible way to manage multi-restaurant deliveries. We created a full-stack app with React, Express, and Kubernetes-powered deployment.",
      result: "Seamless ordering, smooth payments, and scalable delivery system.",
      tech: "React, Express, MongoDB, Docker, Kubernetes",
      illustration: <CloudKitchenIllustration />,
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white" data-testid="portfolio-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="portfolio-title">
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-dark mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="portfolio-description">
            Real-world solutions that drive business growth and operational excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`case-study-card bg-white rounded-xl shadow-lg overflow-hidden ${study.featured ? 'lg:col-span-2' : ''}`}
              data-testid={`case-study-${index}`}
            >
              <div className={study.featured ? "flex flex-col lg:flex-row" : ""}>
                <div className={study.featured ? "lg:w-1/2 device-mockup" : "device-mockup"}>
                  <div className="device-screen aspect-video">
                    <div className="w-full h-full" data-testid={`case-study-image-${index}`}>
                      {study.illustration}
                    </div>
                  </div>
                </div>
                <div className={study.featured ? "lg:w-1/2 p-6 lg:p-8" : "p-6"}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`case-study-title-${index}`}>
                    {study.title}
                  </h3>
                  <h4 className="text-primary-blue font-medium mb-4" data-testid={`case-study-subtitle-${index}`}>
                    {study.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-4" data-testid={`case-study-description-${index}`}>
                    {study.description}
                  </p>
                  <div className="flex items-center text-green-600 font-medium mb-4">
                    <i className="fas fa-arrow-right mr-2"></i>
                    <span data-testid={`case-study-result-${index}`}>
                      {study.result}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500" data-testid={`case-study-tech-${index}`}>
                    <strong>Tech Stack:</strong> {study.tech}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
