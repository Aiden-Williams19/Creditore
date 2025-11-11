#!/usr/bin/env python3
"""Script to create all missing React component and page files"""
import os

# All files to create
FILES = {
    # Component CSS files
    'src/components/Header.css': '''.header {
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.logo h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav a {
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav a:hover {
  color: var(--primary-blue);
}

.nav a.btn-primary {
  background: var(--primary-blue);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.nav a.btn-primary:hover {
  background: var(--primary-blue-dark);
  color: var(--white);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-blue);
  transition: all 0.3s ease;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav a {
    width: 100%;
    padding: 0.75rem 0;
  }

  .nav a.btn-primary {
    width: 100%;
    text-align: center;
  }
}
''',
    
    'src/components/Footer.css': '''.footer {
  background: var(--dark-grey);
  color: var(--white);
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--white);
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--white);
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--white);
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  transition: background 0.3s ease;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
''',
}

if __name__ == '__main__':
    created = 0
    for filepath, content in FILES.items():
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        if not os.path.exists(filepath):
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Created {filepath}")
            created += 1
        else:
            print(f"- Skipped {filepath} (already exists)")
    print(f"\nCreated {created} new files")

