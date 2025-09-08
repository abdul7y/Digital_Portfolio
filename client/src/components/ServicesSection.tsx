export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Backend Development",
      description: "Node.js, Express.js, REST APIs, .NET",
      highlight: "Scalable & Secure →"
    },
    {
      icon: "fas fa-paint-brush",
      title: "Frontend Development",
      description: "React, Next.js, Tailwind",
      highlight: "Modern & Responsive →"
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Solutions",
      description: "Shopify, Custom Storefronts",
      highlight: "Sales Optimized →"
    },
    {
      icon: "fas fa-cogs",
      title: "ERP Development",
      description: "Tailored business management systems",
      highlight: "Process Automation →"
    },
    {
      icon: "fas fa-database",
      title: "Database Design",
      description: "MongoDB, SQL, PostgreSQL",
      highlight: "Optimized Performance →"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & DevOps",
      description: "Docker, Kubernetes, CI/CD pipelines",
      highlight: "Scalable Infrastructure →"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-dark mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="services-description">
            Comprehensive development solutions to elevate your business with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white p-8 rounded-xl shadow-lg"
              data-testid={`service-card-${index}`}
            >
              <div className="text-primary-blue text-4xl mb-6">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <div className="text-primary-blue font-medium" data-testid={`service-highlight-${index}`}>
                {service.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
