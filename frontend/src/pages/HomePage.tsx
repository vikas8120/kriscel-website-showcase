import { projects } from '../data'

function HomePage() {
  return (
    <main>
      <section className="section section--projects-textured" id="projects">
        <div className="section-inner">
          <div className="section-heading">
            <span className="eyebrow">Featured Projects</span>
            <h2>High-contrast project cards on the deep slate band.</h2>
            <p>
              This section now uses a white textured canvas so the cards, tags, and actions feel
              lighter, cleaner, and more premium.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className={`project-card project-card--${project.accent}`}>
                <div
                  className={`project-thumbnail${project.image ? ' project-thumbnail--image' : ''}`}
                  style={
                    project.image
                      ? {
                          backgroundImage: `linear-gradient(180deg, rgba(248, 251, 253, 0.16), rgba(47, 61, 78, 0.12)), url(${project.image})`,
                          backgroundSize: project.imageFit ?? 'cover',
                          backgroundPosition: project.imagePosition ?? 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : undefined
                  }
                >
                  <span>{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.shortDescription}</p>
                  <p className="project-case">{project.fullCaseStudy}</p>
                  <div className="feature-list">
                    {project.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <div className="tag-row">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
