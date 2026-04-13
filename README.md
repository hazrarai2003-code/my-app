# CI/CD Pipeline Project

Automated deployment pipeline using GitHub Actions and AWS EC2.

## How it works
Push code to main branch → GitHub Actions triggers → SSH into EC2 → git pull → PM2 restarts → Live in 30 seconds.

## Tech Stack
- AWS EC2
- GitHub Actions
- Node.js / Express
- PM2
- Linux (Ubuntu)
