// AI/ML Portfolio JavaScript

// Data from the provided JSON
const portfolioData = {
    profile: {
      name: "Michał Heit",
      title: "AI/ML Specialist",
      description: "AI and Machine Learning specialist with 5+ years of experience in developing advanced ML models and AI solutions for businesses."
    },
    projects: [
      {
        id: 1,
        title: "Hyperpersonalization Recommendation Engine",
        description: `<strong>Completed: December 2023</strong><br>
                      An engine using deep learning to segment customers, deliver personalized offers and ad campaigns per segment based on Cialdini’s social-influence principles, and predict churn while forecasting customer journeys. It empowers marketing teams to optimize campaigns with actionable, data-driven insights at scale.`,
        fullDescription: `The Hyperpersonalization Recommendation Engine leverages deep learning models to automatically segment customers by behavior and preferences, 
                          deliver tailored offers and propose ads for each segment based on specific social-influence principles outlined by Cialdini, predict churn risks
                          and forecast customer journeys influenced by social dynamics - all through a single, intuitive interface.
                          Developed over twelve months with NCBR funding and now successfully completed, the project overcame challenges such as preserving user anonymity across data pipelines,
                          operating within a limited set of algorithmic choices, optimizing performance on large-scale datasets, maintaining consistency across diverse machine-learning frameworks
                          and handling sparse or incomplete data. By transforming raw customer information into actionable insights, this solution empowers marketing professionals to design
                          and execute more effective, data-driven campaigns at scale.<br><br>
                          <strong>Key Responsibilities</strong>:<br>
                          - implementing deep-learning methods, models and algorithms,<br>
                          - developing the overall system architecture,<br>
                          - allocating tasks across the team and monitoring progress,<br>
                          - designing the end-to-end data-flow concepts,<br>
                          - leading the project team and coordinating stakeholders,<br>
                          - defining software production and deployment processes,<br>
                          - selecting and integrating the optimal tools and frameworks,<br>
                          - conducting hands-on research to validate and refine methods.`,
        technologies: ["Python", "PyTorch", "MLflow", "HuggingFace", "Azure/Databricks", "Spark", "Pandas", "Git", "Azure Devops"],
        github: "https://github.com/jumpincrane/"
      },
      {
        id: 2,
        title: "Industrial Operations Intelligence Engine",
        description: `<strong>Completed: September 2022</strong><br>
                      The platform ingests data from external sources to generate comprehensive factory reports, featuring a deep-learning anomaly detection module,
                      an autoregressive time-series forecasting engine and a heuristic algorithm - driven warehouse & inventory optimizer - all through an intuitive interface.`,
        fullDescription: `This is a modular system designed to support data-driven decision-making in industrial environments.
                          It collects and processes data from external sources through a unified pipeline that includes data cleaning, normalization and feature extraction.
                          Anomaly detection is performed using deep learning models trained to recognize typical operational patterns and identify deviations that may indicate equipment faults or process instabilities.
                          Time-series forecasting is based on autoregressive and deep learning models that combine both internal measurements and additional influencing factors,
                          enabling the prediction of selected production metrics over multiple time steps. The warehouse and inventory optimization module applies heuristic algorithms to determine effective stock levels,
                          replenishment schedules and storage configurations, supporting cost-efficient logistics management. The platform provides configurable, exportable reports summarizing key metrics,
                          detected anomalies and forecast results, making it suitable for continuous monitoring, model refinement and operational analysis in manufacturing contexts.<br><br>
                          <strong>Key Responsibilities</strong>:<br>
                          - implementing methods, models and algorithms,<br>
                          - writing technical documentation and milestone reports,<br>
                          - conducting model research and testing,<br>
                          - refactoring repository structure and improving code.`,
        technologies: ["Python", "PyTorch", "MLflow", "Azure ML", "Jax", "XGBoost", "Git", "Pandas"],
        github: "https://github.com/jumpincrane/"
      },
      {
        id: 3,
        title: "Analiza sentymentu",
        description: "Model NLP do analizy sentymentu opinii klientów z wykorzystaniem transformerów.",
        fullDescription: "Zaawansowany model NLP wykorzystujący transformery (BERT) do analizy sentymentu opinii klientów. System przetwarza teksty w czasie rzeczywistym, klasyfikuje sentyment i identyfikuje kluczowe tematy. Implementacja obejmuje fine-tuning modeli pre-trained na specyficznych danych biznesowych, co pozwoliło osiągnąć dokładność 94%.",
        technologies: ["BERT", "Hugging Face", "Docker"],
        github: "https://github.com/jumpincrane/sentiment-analysis"
      }
    ],
    about: "Jestem doświadczonym specjalistą AI/ML z pasją do rozwiązywania złożonych problemów biznesowych za pomocą uczenia maszynowego. Specjalizuję się w deep learning, NLP i computer vision. W wolnym czasie eksperymentuję z najnowszymi technikami ML i uczestniczę w projektach open source.",
    experience: [
      {
        position: "ML Engineer",
        company: "TIDK",
        period: "01/2023 - 11/2024",
        description: `- Developed ETL pipelines in Databricks.<br>
                      - Created modules to anonymize data and a mechanism to change SQL procedures to PySpark with writes to Data Lake instead of SQL database.<br>
                      - Implemented and deployed state-of-the-art models.<br>
                      - Leading NCBR "Sensitivity" research project from the conceptual solutions standpoint, in the field of machine learning and deep learning, designing the architecture and implementing pipelines on the Databricks platform.<br>
                      - Co-lead the “Intelligent Culinary Planner”, implemented solutions and deployed models in Azure ML.`,
        type: "work"
      },
      {
        position: "Junior ML Engineer",
        company: "TIDK",
        period: "03/2022 - 12/2022",
        description: `- Orchestrated the entire architectural framework and solution for the “Intelligent Culinary Planner” project.<br>
                      - Designed and implemented predictive models for detecting anomalies and forecasting timeseries.<br>
                      - Drew up comprehensive reports highlighting the milestones attained in grant projects.<br>
                      - Reimplemented algorithms leveraging JAX, resulting in a 1000% acceleration in execution efficiency.`,
        type: "work"
      }
    ],
    education: [
      {
        degree: "Master of Science",
        school: "Poznan University of Technology",
        period: "03/2021 - 06/2022",
        specialization: "Robots and Autonomous Systems (IT department) <br> Graduate work: “Implementation of reverse image search for medical“",
        type: "education"
      },
      {
        degree: "Bachelor of Engineering",
        school: "Poznan University of Technology",
        period: "10/2017 - 02/2021",
        specialization: "Automatic and Robotics (IT department)",
        type: "education"
      }
    ],
    techStack: {
      ml_and_ai: ["PyTorch", "Scikit-learn", "XGBoost", "MLflow", "LangChain", "LangGraph", "LangSmith"],
      cloud_and_infrastructure: ["Azure ML", "Azure AI Services", "Azure Function/Web App", "Azure Data Factory", "Databricks", "Docker"],
      data_engineering: ["Pandas", "NumPy", "Apache Spark"],
      software_development: ["Python", "C++", "PyTest", "FastAPI", "Git", "Azure Repos"],
      databases: ["MS SQL", "Redis", "Neo4j", "Azure Data Lake Storage"],
      tools: ["Jupyter Notebook", "Plotly", "Unix-like OS", "VS Code"]
    },
    contact: {
      email: "michal.heit.contact@gmail.com",
      phone: "+48 xxx xxx xxx",
      linkedin: "linkedin.com/in/michalheit",
      github: "github.com/jumpincrane"
    }
  };
  
  class Portfolio {
    constructor() {
      this.currentSection = 'home';
      this.init();
    }
  
    init() {
      this.setupNavigation();
      this.setupScrollObserver();
      this.generateProjects();
      this.generateTimeline();
      this.generateTechStack();
      this.setupModal();
      this.setupContactForm();
      this.addScrollAnimations();
    }
  
    // Navigation setup
    setupNavigation() {
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          const targetId = link.getAttribute('href').substring(1);
          this.scrollToSection(targetId);
          this.setActiveNav(link);
        });
      });
  
      // Setup hero button navigation
      const heroButton = document.querySelector('.hero-actions a[href="#portfolio"]');
      if (heroButton) {
        heroButton.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.scrollToSection('portfolio');
        });
      }
    }
  
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update URL without causing page reload
        if (history.pushState) {
          history.pushState(null, null, `#${sectionId}`);
        }
      }
    }
  
    setActiveNav(activeLink) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      activeLink.classList.add('active');
    }
  
    // Scroll observer for section visibility
    setupScrollObserver() {
      const sections = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Update active navigation
            const sectionId = entry.target.id;
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
              }
            });
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      });
  
      sections.forEach(section => {
        observer.observe(section);
      });
    }
  
    // Generate portfolio projects
    generateProjects() {
      const projectsGrid = document.getElementById('projectsGrid');
      if (!projectsGrid) return;
  
      const projectsHTML = portfolioData.projects.map(project => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${project.id * 100}">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-technologies">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn btn-primary btn-small project-modal-btn" data-project-id="${project.id}">
              Zobacz więcej
            </button>
            <a href="${project.github}" target="_blank" class="btn btn-secondary btn-small">
              GitHub
            </a>
          </div>
        </div>
      `).join('');
  
      projectsGrid.innerHTML = projectsHTML;
  
      // Add event listeners to modal buttons after creating them
      this.setupProjectModalButtons();
    }
  
    setupProjectModalButtons() {
      const modalButtons = document.querySelectorAll('.project-modal-btn');
      modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const projectId = parseInt(button.getAttribute('data-project-id'));
          this.openProjectModal(projectId);
        });
      });
    }
  
    // Generate timeline for experience and education
    generateTimeline() {
      const timeline = document.getElementById('timeline');
      if (!timeline) return;
  
      // Combine and sort all timeline items
      const allItems = [
        ...portfolioData.experience.map(item => ({ ...item, type: 'work' })),
        ...portfolioData.education.map(item => ({ ...item, type: 'education' }))
      ];
  
      const timelineHTML = allItems.map((item, index) => {
        const isWork = item.type === 'work';
        const title = isWork ? item.position : item.degree;
        const subtitle = isWork ? item.company : item.school;
        const description = item.description || (item.specialization ? `Specialization: ${item.specialization}` : '');
  
        return `
          <div class="timeline-item" data-aos="fade-left" data-aos-delay="${index * 150}">
            <div class="timeline-header">
              <h4 class="timeline-title">${title}</h4>
              <div class="timeline-company">${subtitle}</div>
              <div class="timeline-period">${item.period}</div>
            </div>
            ${description ? `<p class="timeline-description">${description}</p>` : ''}
          </div>
        `;
      }).join('');
  
      timeline.innerHTML = timelineHTML;
    }
  
    // Generate tech stack
    generateTechStack() {
      const techStack = document.getElementById('techStack');
      if (!techStack) return;
  
      const categories = [
        { title: 'Machine Learning & AI', items: portfolioData.techStack.ml_and_ai },
        { title: 'Cloud & Infrastructure', items: portfolioData.techStack.cloud_and_infrastructure },
        { title: 'Data Engineering', items: portfolioData.techStack.data_engineering },
        { title: 'Software Development', items: portfolioData.techStack.software_development },
        { title: 'Databases', items: portfolioData.techStack.databases },
        { title: 'Development Tools', items: portfolioData.techStack.tools }
      ];
  
      const techStackHTML = categories.map((category, index) => `
        <div class="tech-category" data-aos="fade-up" data-aos-delay="${index * 100}">
          <h4 class="tech-category-title">${category.title}</h4>
          <div class="tech-items">
            ${category.items.map(item => `
              <div class="tech-item">
                <div class="tech-icon"></div>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
  
      techStack.innerHTML = techStackHTML;
    }
  
    // Modal functionality
    setupModal() {
      const modal = document.getElementById('projectModal');
      const backdrop = document.getElementById('modalBackdrop');
      const closeBtn = document.getElementById('modalClose');
  
      if (!modal || !backdrop || !closeBtn) return;
  
      // Close modal events
      backdrop.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeProjectModal();
      });
  
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeProjectModal();
      });
  
      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          this.closeProjectModal();
        }
      });
    }
  
    openProjectModal(projectId) {
      const project = portfolioData.projects.find(p => p.id === projectId);
      if (!project) return;
  
      const modal = document.getElementById('projectModal');
      const title = document.getElementById('modalTitle');
      const description = document.getElementById('modalDescription');
      const technologies = document.getElementById('modalTechnologies');
      const githubLink = document.getElementById('modalGithubLink');
  
      if (!modal || !title || !description || !technologies || !githubLink) return;
  
      title.textContent = project.title;
      description.innerHTML = project.fullDescription;
      technologies.innerHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
      githubLink.href = project.github;
  
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  
    closeProjectModal() {
      const modal = document.getElementById('projectModal');
      if (!modal) return;
      
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  
    // Contact form handling
    setupContactForm() {
      const form = document.getElementById('contactForm');
      if (!form) return;
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.handleContactSubmit(form);
      });
  
      // Fix form field event handling to prevent navigation issues
      const formFields = form.querySelectorAll('input, textarea, button');
      formFields.forEach(field => {
        // Prevent form interactions from triggering navigation
        field.addEventListener('click', (e) => {
          e.stopPropagation();
        });
        
        field.addEventListener('focus', (e) => {
          e.stopPropagation();
        });
  
        field.addEventListener('input', (e) => {
          e.stopPropagation();
        });
  
        field.addEventListener('keydown', (e) => {
          e.stopPropagation();
        });
  
        field.addEventListener('keyup', (e) => {
          e.stopPropagation();
        });
      });
  
      // Prevent form wrapper from causing navigation
      const formWrapper = document.querySelector('.contact-form-wrapper');
      if (formWrapper) {
        formWrapper.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    }
  
    handleContactSubmit(form) {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
  
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Wysyłanie...';
      submitBtn.disabled = true;
  
      setTimeout(() => {
        submitBtn.textContent = 'Wiadomość wysłana!';
        submitBtn.style.background = 'var(--color-ai-green)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          form.reset();
        }, 3000);
      }, 1500);
    }
  
    // Scroll animations
    addScrollAnimations() {
      // Create custom AOS (Animate On Scroll) implementation
      const animatedElements = document.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const animationType = element.getAttribute('data-aos');
            const delay = element.getAttribute('data-aos-delay') || 0;
            
            setTimeout(() => {
              element.classList.add('aos-animate');
            }, parseInt(delay));
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
  
      animatedElements.forEach(element => {
        observer.observe(element);
      });
  
      // Add CSS for AOS animations
      this.addAOSStyles();
    }
  
    addAOSStyles() {
      const style = document.createElement('style');
      style.textContent = `
        [data-aos] {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
  
        [data-aos="fade-up"] {
          transform: translateY(30px);
        }
  
        [data-aos="fade-left"] {
          transform: translateX(-30px);
        }
  
        [data-aos="fade-right"] {
          transform: translateX(30px);
        }
  
        [data-aos].aos-animate {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `;
      document.head.appendChild(style);
    }
  
    // Mobile sidebar toggle (for responsive design)
    toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('open');
    }
  }
  
  // Utility functions
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Global portfolio instance
  let portfolio;
  
  // Initialize portfolio when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    portfolio = new Portfolio();
    
    // Make portfolio globally accessible for onclick handlers
    window.portfolio = portfolio;
    
    // Add smooth reveal for hero section
    setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.classList.add('visible');
      }
    }, 500);
  
    // Performance optimization - lazy load images if any
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });
  
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  });
  
  // Window scroll effects
  window.addEventListener('scroll', debounce(() => {
    // Add/remove shadow to sidebar based on scroll
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (window.scrollY > 100) {
        sidebar.style.boxShadow = '4px 0 20px rgba(0, 0, 0, 0.3)';
      } else {
        sidebar.style.boxShadow = '';
      }
    }
  }, 10));
  
  // Handle window resize
  window.addEventListener('resize', debounce(() => {
    // Close sidebar on desktop if it was opened on mobile
    if (window.innerWidth > 768) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.remove('open');
      }
    }
  }, 250));