import Image from 'next/image'
import {
  ProjectCard,
  ProjectCardOuter,
  ProjectImageContainer,
  ProjectInfo,
  ProjectLink,
  ProjectLinkBox,
  ProjectTag,
  ProjectTagList,
} from 'styles/ProjectsSectionStyles'
import 'twin.macro'

type ProjectProps = {
  href: string
  name: string
  description: string
  tags: string[]
  image: string
  headingLevel?: number
}

const Project = (props: ProjectProps): JSX.Element => {
  const { href, name, description, tags, image, headingLevel = 4 } = props

  return (
    <ProjectCardOuter
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <ProjectCard>
        <ProjectImageContainer>
          <Image src={image} width={1920} height={1080} alt={name} />
          <ProjectTagList>
            {tags.map(tag => (
              <ProjectTag key={tag}>{tag}</ProjectTag>
            ))}
          </ProjectTagList>
        </ProjectImageContainer>
        <ProjectInfo>
          {headingLevel === 2 ? <h2>{name}</h2> : <h4>{name}</h4>}
          <p>{description}</p>
          <ProjectLinkBox>
            <ProjectLink>
              <p>View project on Github</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                width="32px"
                height="32px"
                fill="currentColor"
              >
                <path
                  d="M11 0v2h3.6l-9.8 9.8 1.4 1.4L16 3.4V7h2V0"
                  tw="transform transition-all text-black/80 
                    dark:text-gray-300 group-hocus:translate-x-0.5 group-hocus:-translate-y-0.5
                    group-hocus:text-black/90
                    dark:group-hocus:text-white"
                />
                <path
                  d="M16 16H2V2h7V0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h-2Z"
                  tw="transform transition-all text-black/80 
                    dark:text-gray-300 group-hocus:text-black/90
                    dark:group-hocus:text-white"
                />
              </svg>
            </ProjectLink>
          </ProjectLinkBox>
        </ProjectInfo>
      </ProjectCard>
    </ProjectCardOuter>
  )
}

export default Project
