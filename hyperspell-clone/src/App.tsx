import './App.css'

const heroImages = [
  {
    src: 'https://framerusercontent.com/images/rRYEcSfakSWpJdSWvKE1QpJNF0.png?width=720&height=560',
    alt: 'HydraDB graph interface card',
    className: 'card card-large card-one',
  },
  {
    src: 'https://framerusercontent.com/images/MMY6zB0hz3hYqpLmsMSFvyFxsjE.png?width=540&height=420',
    alt: 'HydraDB context visualization',
    className: 'card card-small card-two',
  },
  {
    src: 'https://framerusercontent.com/images/nLYMwaUBj9lxAhkU018cZSYaCP0.png?width=540&height=420',
    alt: 'HydraDB memory graph card',
    className: 'card card-small card-three',
  },
  {
    src: 'https://framerusercontent.com/images/L8NVefdFbYZ0vEsvrwoof6pvQc.png?width=720&height=560',
    alt: 'HydraDB analytics card',
    className: 'card card-medium card-four',
  },
  {
    src: 'https://framerusercontent.com/images/mXzu5nFBd8HkSgIBWV8ojqG4J0.png?width=720&height=560',
    alt: 'HydraDB storage card',
    className: 'card card-medium card-five',
  },
]

function App() {
  return (
    <main className="page-shell">
      <div className="grain" />
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <div className="grid-glow" />

      <header className="nav">
        <a className="brand" href="https://hydradb.com/#hero" aria-label="HydraDB home">
          <span className="brand-mark">H</span>
          <span>HydraDB</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#benchmarks">Benchmarks</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </nav>

        <a className="nav-cta" href="#book">
          Book a call
        </a>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Graph native context infrastructure for agents</p>
          <h1>The Graph AI Runs On.</h1>
          <p className="subtitle">
            GraphDB built on object storage: 10x cheaper, ultra fast, and purpose-built for
            modern AI workloads.
          </p>
          <p className="supporting">
            Build ontologies, agent memory, company brains, and context graphs.
          </p>

          <div className="hero-actions" aria-label="Hero calls to action">
            <a className="primary-action" href="#book">
              Book a call
              <span aria-hidden="true">↗</span>
            </a>
            <a className="secondary-action" href="#learn">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="HydraDB product preview collage">
          <div className="stage-orbit orbit-one" />
          <div className="stage-orbit orbit-two" />
          <div className="stage-core">
            <span />
            <span />
            <span />
          </div>

          {heroImages.map((image) => (
            <figure className={image.className} key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}

          <div className="metric metric-left">
            <span className="metric-label">Recall accuracy</span>
            <strong>92%</strong>
          </div>
          <div className="metric metric-right">
            <span className="metric-label">Total documents ingested</span>
            <strong>1B+</strong>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
