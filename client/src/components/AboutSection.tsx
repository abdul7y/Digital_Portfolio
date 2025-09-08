import profileImg from "@assets/467737518_18014170061645620_5296588241983270091_n_1755777400169.jpg";

export default function AboutSection() {
  const skills = [
    {
      icon: "fas fa-laptop-code",
      title: "Frontend Development",
      description: "React, Next.js, Tailwind CSS"
    },
    {
      icon: "fas fa-server",
      title: "Backend Development", 
      description: "Node.js, Express.js, .NET"
    },
    {
      icon: "fas fa-database",
      title: "Databases",
      description: "MongoDB, SQL, PostgreSQL"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & DevOps",
      description: "Docker, Kubernetes, GitHub Actions, Jenkins"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-dark mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 section-fade">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={profileImg}
                  alt="Abdullah Ali Professional Photo" 
                  className="w-full h-full object-cover"
                  data-testid="about-profile-image"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 section-fade">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="about-description">
              I'm Abdullah Ali, a passionate Full-Stack Developer & DevOps Engineer from Karachi, Pakistan. I enjoy creating robust applications and optimizing systems for scalability, security, and performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="skill-card bg-blue-50 p-6 rounded-xl border border-blue-100"
                  data-testid={`skill-card-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <i className={`${skill.icon} text-primary-blue text-2xl mr-4`}></i>
                    <h3 className="text-lg font-semibold text-gray-900" data-testid={`skill-title-${index}`}>
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-gray-600" data-testid={`skill-description-${index}`}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
