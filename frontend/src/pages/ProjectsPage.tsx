import { projects } from '../data'

function ProjectsPage() {
  return (
    <main>
      <section className="section section--projects-textured page-section" id="projects-page">
        <div className="section-inner">
          <div className="section-heading">
            <span className="eyebrow">Featured Projects</span>
            <h2>Our work blends design, performance, and brand storytelling.</h2>
            <p>
              Each project is crafted to showcase the client’s business clearly, build trust
              quickly, and create a premium online presence that feels both memorable and
              effective.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                key={project.name}
                className={`project-card project-card--${project.accent} ${
                  project.websiteUrl ? 'project-card--linked' : ''
                }`}
                href={project.websiteUrl}
                target={project.websiteUrl ? '_blank' : undefined}
                rel={project.websiteUrl ? 'noreferrer' : undefined}
                aria-label={project.websiteUrl ? `Open ${project.name} website` : undefined}
              >
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage
