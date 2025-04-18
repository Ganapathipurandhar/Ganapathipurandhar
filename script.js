// Data
const skills = {
    'Programming & Scripting': ['Java/J2EE', 'Python', 'Go', 'Bash Script', 'Power script', 'SQL'],
    'Cloud & DevOps': ['Docker', 'Kubernetes', 'EKS', 'AKS', 'Terraform', 'Ansible', 'Puppet'],
    'Operating Systems': ['RHEL', 'CentOS', 'Ubuntu', 'Windows', 'Mac'],
    'Web Technologies': ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React'],
    'Frameworks': ['Spring', 'Spring Boot', 'JSP', 'Hibernate', 'Spring Batch', 'JMS', 'Apache Kafka', 'Django', 'NodeJS'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Redis'],
    'CI/CD & Tools': ['Jenkins', 'Docker', 'SonarQube', 'Ansible', 'Gitlab', 'Github Actions'],
    'Cloud Platforms': ['AWS', 'Azure', 'SAP Cloud Platform']
};

const experiences = [
    {
        company: 'Nanosoft Technologies',
        role: 'Senior DevOps and Cloud Engineer',
        period: 'Sep 2024 - Mar 2025',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
        company: 'Tata Consultancy Services – Prudential',
        role: 'DevOps Cloud Engineer',
        period: 'June 2022 - Aug 2024',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80'
    },
    {
        company: 'Tata Consultancy Services – Citibank',
        role: 'Cloud Engineer/DevOps',
        period: 'December 2019 - June 2022',
        image: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&q=80'
    }
];

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-open');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('menu-open');
        navLinks.classList.remove('active');
    });
});

// Populate Skills
const skillsGrid = document.getElementById('skillsGrid');
Object.entries(skills).forEach(([category, skillList]) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    
    skillCard.innerHTML = `
        <h3>${category}</h3>
        <div class="skill-tags">
            ${skillList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    skillsGrid.appendChild(skillCard);
});

// Populate Experience
const experienceGrid = document.getElementById('experienceGrid');
experiences.forEach(exp => {
    const expCard = document.createElement('div');
    expCard.className = 'experience-card';
    
    expCard.innerHTML = `
        <img src="${exp.image}" alt="${exp.company}">
        <div class="experience-card-content">
            <h3>${exp.company}</h3>
            <p class="role">${exp.role}</p>
            <p class="period">${exp.period}</p>
        </div>
    `;
    
    experienceGrid.appendChild(expCard);
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();