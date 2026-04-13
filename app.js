const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Anushka Hazra — Cloud Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: #0d1117;
      color: #e6edf3;
      font-family: 'Syne', sans-serif;
      min-height: 100vh;
      padding: 3rem 1.5rem;
    }

    .container {
      max-width: 720px;
      margin: 0 auto;
    }

    /* ── Header ── */
    .header {
      border-bottom: 1px solid #21262d;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }

    .name {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #e6edf3;
      margin-bottom: 6px;
    }

    .role {
      font-family: 'DM Mono', monospace;
      font-size: 13px;
      color: #7d8590;
      margin-bottom: 16px;
    }

    .linkedin-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1d2d3e;
      color: #58a6ff;
      text-decoration: none;
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      padding: 7px 16px;
      border-radius: 20px;
      border: 1px solid #1f4068;
      transition: background 0.2s;
    }

    .linkedin-btn:hover { background: #253040; }

    /* ── Section label ── */
    .section-label {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: #484f58;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    /* ── Project Card ── */
    .project-card {
      background: #161b22;
      border: 1px solid #21262d;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      transition: border-color 0.2s;
    }

    .project-card:hover { border-color: #30363d; }

    .proj-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .proj-name {
      font-size: 17px;
      font-weight: 500;
      color: #e6edf3;
      margin-bottom: 4px;
    }

    .proj-sub {
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      color: #7d8590;
    }

    .live-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: #3fb950;
      background: #0d2116;
      border: 1px solid #1a4628;
      padding: 4px 12px;
      border-radius: 20px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .live-dot {
      width: 6px;
      height: 6px;
      background: #3fb950;
      border-radius: 50%;
      animation: pulse 1.8s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }

    .proj-desc {
      font-size: 14px;
      color: #8b949e;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    code {
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      background: #21262d;
      color: #e6edf3;
      padding: 2px 7px;
      border-radius: 4px;
    }

    /* ── Pipeline Visual ── */
    .pipeline {
      background: #0d1117;
      border: 1px solid #21262d;
      border-radius: 8px;
      padding: 1rem 1.25rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .pipe-node {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: #8b949e;
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 5px 10px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .pipe-arrow {
      font-size: 12px;
      color: #484f58;
      padding: 0 6px;
      flex-shrink: 0;
    }

    /* ── Tags ── */
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .tag {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: #7d8590;
      background: #21262d;
      border: 1px solid #30363d;
      padding: 4px 10px;
      border-radius: 20px;
    }

    /* ── Stats ── */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: #161b22;
      border: 1px solid #21262d;
      border-radius: 10px;
      padding: 1rem;
      text-align: center;
    }

    .stat-val {
      display: block;
      font-size: 22px;
      font-weight: 700;
      color: #e6edf3;
      margin-bottom: 4px;
    }

    .stat-lbl {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: #484f58;
    }

    /* ── Skills ── */
    .skills-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 3rem;
    }

    .skill-chip {
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      color: #7d8590;
      border: 1px solid #21262d;
      padding: 6px 14px;
      border-radius: 20px;
      transition: border-color 0.2s, color 0.2s;
    }

    .skill-chip:hover {
      border-color: #58a6ff;
      color: #58a6ff;
    }

    /* ── Footer ── */
    .footer {
      border-top: 1px solid #21262d;
      padding-top: 1.5rem;
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      color: #484f58;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">

    <div class="header">
      <h1 class="name">Anushka Hazra</h1>
      <p class="role">Cloud Computing Intern &nbsp;·&nbsp; Economics Graduate</p>
      <a class="linkedin-btn" href="https://www.linkedin.com/in/anushka-hazra-629281215" target="_blank">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        linkedin.com/in/anushka-hazra
      </a>
    </div>

    <p class="section-label">Featured Project</p>

    <div class="project-card">
      <div class="proj-top">
        <div>
          <p class="proj-name">Automated CI/CD Deployment Pipeline</p>
          <p class="proj-sub">AWS EC2 &nbsp;·&nbsp; GitHub Actions &nbsp;·&nbsp; Node.js</p>
        </div>
        <span class="live-badge">
          <span class="live-dot"></span>
          live
        </span>
      </div>

      <p class="proj-desc">
        Built an end-to-end automated deployment pipeline that eliminates manual server updates.
        A single <code>git push</code> triggers a GitHub Actions workflow that SSH's into an
        AWS EC2 instance, pulls the latest code, and restarts the application — all in under 30 seconds.
      </p>

      <div class="pipeline">
        <span class="pipe-node">Local Edit</span>
        <span class="pipe-arrow">→</span>
        <span class="pipe-node">git push</span>
        <span class="pipe-arrow">→</span>
        <span class="pipe-node">GitHub Actions</span>
        <span class="pipe-arrow">→</span>
        <span class="pipe-node">SSH → EC2</span>
        <span class="pipe-arrow">→</span>
        <span class="pipe-node">PM2 Restart</span>
        <span class="pipe-arrow">→</span>
        <span class="pipe-node">✓ Live</span>
      </div>

      <div class="tags">
        <span class="tag">AWS EC2</span>
        <span class="tag">GitHub Actions</span>
        <span class="tag">Node.js / Express</span>
        <span class="tag">PM2</span>
        <span class="tag">SSH Keys</span>
        <span class="tag">YAML Workflow</span>
        <span class="tag">Linux (Ubuntu)</span>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <span class="stat-val">&lt;30s</span>
        <span class="stat-lbl">deploy time</span>
      </div>
      <div class="stat-card">
        <span class="stat-val">0</span>
        <span class="stat-lbl">manual steps</span>
      </div>
      <div class="stat-card">
        <span class="stat-val">AWS</span>
        <span class="stat-lbl">cloud platform</span>
      </div>
    </div>

    <p class="section-label">Skills</p>
    <div class="skills-row">
      <span class="skill-chip">AWS EC2</span>
      <span class="skill-chip">GitHub Actions</span>
      <span class="skill-chip">Linux / Bash</span>
      <span class="skill-chip">Node.js</span>
      <span class="skill-chip">CI/CD Pipelines</span>
      <span class="skill-chip">SSH / Networking</span>
      <span class="skill-chip">Process Management</span>
    </div>

    <div class="footer">
      built by anushka hazra &nbsp;·&nbsp; deployed via ci/cd pipeline
    </div>

  </div>
</body>
</html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});