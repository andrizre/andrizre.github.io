/**
 * Main Interactive Application Logic - andrizre.github.io
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderMetrics();
  renderAbout();
  renderTimeline();
  renderProjects();
  renderPublications();
  renderSkills();
  initTimeClock();
  initNavigation();
  initCommandPalette();
  initModals();
});

/* --------------------------------------------------------------------------
   Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    } else {
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
  }
}

/* --------------------------------------------------------------------------
   Profile & Sidebar Population
   -------------------------------------------------------------------------- */
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  
  // Update document title & metadata
  document.title = `${p.name} — ${p.title} | ${p.handle}`;
  
  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = p.name;
  
  const handleEl = document.getElementById('profile-handle');
  if (handleEl) handleEl.textContent = p.handle;

  const titleEl = document.getElementById('profile-title');
  if (titleEl) titleEl.textContent = p.title;

  const affilEl = document.getElementById('profile-affiliation');
  if (affilEl) affilEl.textContent = p.affiliation;

  const locEl = document.getElementById('profile-location');
  if (locEl) locEl.textContent = p.location;

  const emailValEl = document.getElementById('contact-email-val');
  if (emailValEl) emailValEl.textContent = p.email;
}

/* --------------------------------------------------------------------------
   Live Local Time Clock (Jakarta WIB UTC+7)
   -------------------------------------------------------------------------- */
function initTimeClock() {
  const clockEl = document.getElementById('live-time');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format for UTC+7 (Jakarta)
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    clockEl.textContent = `${now.toLocaleTimeString('en-US', options)} WIB`;
  }
  update();
  setInterval(update, 1000);
}

/* --------------------------------------------------------------------------
   Metrics Rendering
   -------------------------------------------------------------------------- */
function renderMetrics() {
  const container = document.getElementById('metrics-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-desc">${m.description}</div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   About Section & Research Interests
   -------------------------------------------------------------------------- */
function renderAbout() {
  const leadEl = document.getElementById('about-lead');
  if (leadEl) leadEl.textContent = PORTFOLIO_DATA.about.lead;

  const bodyEl = document.getElementById('about-body');
  if (bodyEl) {
    bodyEl.innerHTML = PORTFOLIO_DATA.about.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  const interestsEl = document.getElementById('research-interests-list');
  if (interestsEl) {
    interestsEl.innerHTML = PORTFOLIO_DATA.about.researchInterests.map(i => `
      <span class="interest-pill">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        ${i}
      </span>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   Timeline / Work Experience & Education
   -------------------------------------------------------------------------- */
function renderTimeline() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <h3 class="timeline-role">${item.role}</h3>
        <span class="timeline-period">${item.period}</span>
      </div>
      <div class="timeline-company">
        <span>${item.company}</span>
        <span class="location">• ${item.location}</span>
      </div>
      <p class="timeline-desc">${item.description}</p>
      <ul class="timeline-highlights">
        ${item.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="timeline-skills">
        ${item.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const eduContainer = document.getElementById('education-timeline');
  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role">${edu.degree}</h3>
          <span class="timeline-period">${edu.period}</span>
        </div>
        <div class="timeline-company">
          <span>${edu.institution}</span>
          <span class="location">• ${edu.grade}</span>
        </div>
        <p class="timeline-desc">${edu.description}</p>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   Projects Showcase & Category Filter
   -------------------------------------------------------------------------- */
let activeProjectCategory = 'all';

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = activeProjectCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeProjectCategory);

  container.innerHTML = filtered.map(project => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-top">
        <span class="project-cat-badge">${project.categoryLabel}</span>
        <div class="project-links">
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          ` : ''}
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Preview">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          ` : ''}
        </div>
      </div>

      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>

      <div class="project-bottom">
        <div class="project-tech-stack">
          ${project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          <button class="btn-details" onclick="openProjectModal('${project.id}')">
            Read Case Study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <span class="project-stars-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" color="#eab308"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${project.stars}
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // Setup filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProjectCategory = btn.getAttribute('data-filter');
      renderProjects();
    });
  });
}

/* --------------------------------------------------------------------------
   Publications & Technical Writing (byminji style)
   -------------------------------------------------------------------------- */
function renderPublications() {
  const container = document.getElementById('publications-list');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.publications.map(pub => `
    <div class="pub-card" id="pub-${pub.id}">
      <div class="pub-header">
        <span class="pub-type">${pub.type}</span>
        <span class="pub-year">${pub.year}</span>
      </div>
      <h3 class="pub-title">${pub.title}</h3>
      <div class="pub-authors">${pub.authors.join(', ')}</div>
      <div class="pub-venue">${pub.venue}</div>

      <div class="pub-actions">
        <button class="btn-pub-action" onclick="toggleAbstract('${pub.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Abstract
        </button>
        <button class="btn-pub-action" onclick="openBibtexModal('${pub.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          BibTeX
        </button>
        ${pub.doi ? `
          <a href="${pub.doi}" target="_blank" rel="noopener noreferrer" class="btn-pub-action">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Repository / Code
          </a>
        ` : ''}
      </div>

      <div class="pub-abstract-drawer" id="abstract-${pub.id}">
        <strong>Abstract:</strong> ${pub.abstract}
      </div>
    </div>
  `).join('');
}

window.toggleAbstract = function(id) {
  const drawer = document.getElementById(`abstract-${id}`);
  if (drawer) {
    drawer.classList.toggle('open');
  }
};

/* --------------------------------------------------------------------------
   Skills Matrix
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const categories = [
    { key: 'languages', title: 'Languages & Core' },
    { key: 'frontend', title: 'Frontend Architecture' },
    { key: 'backend', title: 'Backend & Databases' },
    { key: 'automation', title: 'Bots & Automation' },
    { key: 'tools', title: 'Cloud, DevOps & Tooling' }
  ];

  container.innerHTML = categories.map(cat => {
    const list = PORTFOLIO_DATA.skills[cat.key] || [];
    return `
      <div class="skill-category-card">
        <h4 class="category-title">${cat.title}</h4>
        <div class="skill-items-list">
          ${list.map(s => `
            <div class="skill-item-row">
              <span class="skill-name">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                ${s.name}
              </span>
              <span class="skill-level-badge">${s.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   Navigation & Active Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Modal Systems (Project Details & BibTeX)
   -------------------------------------------------------------------------- */
function initModals() {
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

window.closeAllModals = function() {
  document.querySelectorAll('.modal-overlay').forEach(el => el.classList.remove('active'));
};

window.openProjectModal = function(id) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-project-title');
  const body = document.getElementById('modal-project-body');
  const footer = document.getElementById('modal-project-footer');

  if (title) title.textContent = project.title;
  if (body) {
    body.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <span class="project-cat-badge">${project.categoryLabel}</span>
      </div>
      <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.25rem;">
        ${project.extendedDescription || project.description}
      </p>
      
      <div style="background-color: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
        <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Key Architecture & Stats</div>
        <div style="font-family: var(--font-mono); font-size: 0.88rem; color: var(--accent-text);">${project.stats}</div>
      </div>

      <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Technologies Used</div>
      <div class="project-tech-stack" style="margin-bottom: 0;">
        ${project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          GitHub Repo
        </a>
      ` : ''}
      ${project.demo ? `
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>
      ` : ''}
    `;
  }

  modal.classList.add('active');
};

window.openBibtexModal = function(id) {
  const pub = PORTFOLIO_DATA.publications.find(p => p.id === id);
  if (!pub) return;

  const modal = document.getElementById('bibtex-modal');
  const codeBlock = document.getElementById('bibtex-code-content');
  const copyBtn = document.getElementById('btn-copy-bibtex');

  if (codeBlock) codeBlock.textContent = pub.bibtex;
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(pub.bibtex).then(() => {
        showToast('BibTeX citation copied to clipboard!');
      });
    };
  }

  modal.classList.add('active');
};

/* --------------------------------------------------------------------------
   Command Palette (Ctrl+K / Cmd+K)
   -------------------------------------------------------------------------- */
function initCommandPalette() {
  const paletteModal = document.getElementById('command-palette-modal');
  const paletteInput = document.getElementById('palette-search-input');
  const paletteResults = document.getElementById('palette-results-list');
  const searchTriggers = document.querySelectorAll('[data-open-palette]');

  if (!paletteModal || !paletteInput || !paletteResults) return;

  searchTriggers.forEach(t => t.addEventListener('click', openPalette));

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openPalette();
    }
  });

  function openPalette() {
    paletteModal.classList.add('active');
    paletteInput.value = '';
    renderSearchResults('');
    setTimeout(() => paletteInput.focus(), 50);
  }

  paletteInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.toLowerCase());
  });

  function renderSearchResults(query) {
    const items = [];

    // Navigation sections
    const navs = [
      { title: 'Jump to: About & Bio', type: 'Section', action: () => scrollToSection('about') },
      { title: 'Jump to: Work Experience', type: 'Section', action: () => scrollToSection('experience') },
      { title: 'Jump to: Featured Projects', type: 'Section', action: () => scrollToSection('projects') },
      { title: 'Jump to: Publications & Articles', type: 'Section', action: () => scrollToSection('publications') },
      { title: 'Jump to: Skills & Competencies', type: 'Section', action: () => scrollToSection('skills') },
      { title: 'Jump to: Contact & Inquiries', type: 'Section', action: () => scrollToSection('contact') }
    ];

    // Projects
    PORTFOLIO_DATA.projects.forEach(p => {
      items.push({
        title: `Project: ${p.title}`,
        type: p.categoryLabel,
        action: () => {
          closeAllModals();
          openProjectModal(p.id);
        }
      });
    });

    // Publications
    PORTFOLIO_DATA.publications.forEach(pub => {
      items.push({
        title: `Article: ${pub.title}`,
        type: pub.type,
        action: () => {
          closeAllModals();
          scrollToSection('publications');
          toggleAbstract(pub.id);
        }
      });
    });

    const allEntries = [...navs, ...items];
    const filtered = query.trim() === '' 
      ? allEntries.slice(0, 8) 
      : allEntries.filter(i => i.title.toLowerCase().includes(query) || i.type.toLowerCase().includes(query));

    paletteResults.innerHTML = filtered.map((item, idx) => `
      <li class="palette-item" data-index="${idx}">
        <span class="palette-item-title">${item.title}</span>
        <span class="palette-item-type">${item.type}</span>
      </li>
    `).join('');

    paletteResults.querySelectorAll('.palette-item').forEach((li, idx) => {
      li.addEventListener('click', () => {
        filtered[idx].action();
        closeAllModals();
      });
    });
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/* --------------------------------------------------------------------------
   Copy Actions & Toast System
   -------------------------------------------------------------------------- */
window.copyEmail = function() {
  const email = PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Email copied: ${email}`);
  });
};

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.2s ease-out';
    setTimeout(() => toast.remove(), 200);
  }, 2800);
}
