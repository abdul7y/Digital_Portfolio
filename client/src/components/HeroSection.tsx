import profileImg from "@assets/467737518_18014170061645620_5296588241983270091_n_1755776897228.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-light-blue to-white" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 section-fade">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
              Hi, I'm <span className="text-gradient">Abdullah Ali</span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-primary-blue mb-6" data-testid="hero-subtitle">
              Full-Stack With DevOps 
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="hero-description">
              I Can design and build scalable software solutions from Shopify & modern web apps to enterprise-grade systems helping businesses grow with clean, efficient, and future-ready technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="btn-primary text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center"
                data-testid="button-view-work"
              >
                <i className="fas fa-eye mr-2"></i>View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-medium hover:bg-primary-blue hover:text-white transition-all inline-flex items-center justify-center"
                data-testid="button-connect"
              >
                <i className="fas fa-handshake mr-2"></i>Let's Connect
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center section-fade">
            <div className="relative">
              <div className="hero-glow rounded-full p-2 bg-gradient-to-br from-primary-blue to-primary-dark">
                <img 
                  src={profileImg}
                  alt="Abdullah Ali - Full-Stack & DevOps Engineer" 
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl"
                  data-testid="hero-profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
