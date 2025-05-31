document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      e.preventDefault();
      
      console.log('Navigating to:', this.textContent);

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  const projectsBtn = document.querySelector('.projects-btn');
  if (projectsBtn) {
    projectsBtn.addEventListener('click', function() {
      const terminalWork = document.querySelector('.terminal-work');
      if (terminalWork) {
        const profileImg = terminalWork.querySelector('.terminal-profile-img');
        const isVisible = terminalWork.style.display === 'block';
        if (isVisible) {
          terminalWork.style.display = 'none';
          if (profileImg) profileImg.style.display = 'none';
        } else {
          terminalWork.style.display = 'block';
          if (profileImg) profileImg.style.display = 'block';
          terminalWork.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }
  
  // Language toggle
  const langToggle = document.querySelector('.lang');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      // Toggle between languages
      const currentText = this.textContent;
      if (currentText.includes('En | It')) {
        this.textContent = 'It | En';
        console.log('Switched to Italian');
      } else {
        this.textContent = 'En | It';
        console.log('Switched to English');
      }
    });
  }
  
  // Simple animation for hero section
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    // Add a subtle fade-in effect
    heroSection.style.opacity = '0';
    heroSection.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
      heroSection.style.opacity = '1';
    }, 300);
  }
  
  // Social media buttons
  const socialButtons = document.querySelectorAll('.socials button');
  socialButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Toggle highlight class
      this.classList.toggle('highlight');
      
      const platform = this.textContent;
      const isHighlighted = this.classList.contains('highlight');
      console.log(`${platform} is ${isHighlighted ? 'highlighted' : 'unhighlighted'}`);
      
      // In a real implementation, we would redirect to the appropriate social media profile
      // Example: window.open('https://github.com/username', '_blank');
    });
  });
  
  // Skill box highlighting
  const skillBoxes = document.querySelectorAll('.skill-box');
  skillBoxes.forEach(box => {
    box.addEventListener('click', function() {
      // Remove 'dark' class from all skill boxes
      skillBoxes.forEach(b => b.classList.remove('dark'));
      // Add 'dark' class only to the clicked skill box
      this.classList.add('dark');
      // Log which skill was clicked and its state
      const skillTitle = this.querySelector('h3').textContent;
    });
  });
  
  // Work item highlighting
  const workItems = document.querySelectorAll('.work-item');
  workItems.forEach(item => {
    item.addEventListener('click', function() {
      // Toggle highlight class
      this.classList.toggle('highlight');
      
      // Get the company name (second span)
      const spans = this.querySelectorAll('span');
      const company = spans.length > 1 ? spans[1].textContent : 'Unknown';
      
      const isHighlighted = this.classList.contains('highlight');
    });
  });
  
  // Skills level switcher
  const skillsLevelBtns = document.querySelectorAll('.skills-level-btn');
  const skillsRows = document.querySelectorAll('.skills-row');
  skillsLevelBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Set active button
      skillsLevelBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      // Show the selected skills row
      const level = this.getAttribute('data-level');
      skillsRows.forEach(row => {
        if (row.getAttribute('data-level') === level) {
          row.style.display = 'block';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});
