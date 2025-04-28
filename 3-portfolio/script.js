let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Skills Data
const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'Python', 'Django', 'Data Structures', 'Machine Learning'
];

const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
  const div = document.createElement('div');
  div.className = 'skill';
  div.textContent = skill;
  skillsContainer.appendChild(div);
});

// Projects Data
const projects = [
  { name: 'Portfolio Website', description: 'Personal website showcasing skills and projects.' },
  { name: 'E-Commerce App', description: 'Built a full-stack e-commerce platform.' },
  { name: 'AI Chatbot', description: 'A simple AI chatbot using Python and ML techniques.' },
];

const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `<strong>${project.name}</strong><br><small>${project.description}</small>`;
  projectsContainer.appendChild(div);
});

// Dummy Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for contacting me! I will reply soon.');
});
