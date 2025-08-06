import './App.css'
import { defaultConfig } from './config'
import type { LandingPageConfig } from './config'

interface AppProps {
  config?: LandingPageConfig;
}

function App({ config = defaultConfig }: AppProps) {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>{config.brand.name}</h2>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                {config.hero.title}
                <span className="highlight">{config.hero.highlight}</span>
              </h1>
              <p className="hero-description">
                {config.hero.description}
              </p>
              <div className="hero-actions">
                <button className="primary-button">{config.hero.primaryButton}</button>
                <button className="secondary-button">{config.hero.secondaryButton}</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="section-header">
              <h2>{config.features.title}</h2>
              <p>{config.features.subtitle}</p>
            </div>
            <div className="features-grid">
              {config.features.items.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>{config.cta.title}</h2>
              <p>{config.cta.description}</p>
              <button className="primary-button large">{config.cta.buttonText}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{config.footer.brand.name}</h3>
              <p>{config.footer.brand.description}</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                {config.footer.links.product.map((link, index) => (
                  <a key={index} href={link.href}>{link.label}</a>
                ))}
              </div>
              <div className="link-group">
                <h4>Company</h4>
                {config.footer.links.company.map((link, index) => (
                  <a key={index} href={link.href}>{link.label}</a>
                ))}
              </div>
              <div className="link-group">
                <h4>Legal</h4>
                {config.footer.links.legal.map((link, index) => (
                  <a key={index} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{config.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
