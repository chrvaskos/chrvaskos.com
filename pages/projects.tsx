import type { NextPage } from 'next'
import Container from 'components/Container'
import { Project } from 'components/ProjectsSection'
import {
  ProjectsContainer,
  ProjectsSectionBox,
} from 'styles/ProjectsSectionStyles'

const projectsArr: {
  href: string
  name: string
  desc: string
  tags: string[]
  image: string
}[] = [
  {
    href: 'https://github.com/chrvaskos/BurdenOff',
    name: 'Burden Off',
    desc: "A complete CRUD web application made collaboratively with fellow students during our undergraduate studies. I was completely responsible for the UI/UX design and front-end development. I've actively participated in discussions about the back-end as well.",
    tags: ['React', 'Bootstrap', 'MySQL', 'Express.js'],
    image: '/images/projects/burdenoff.webp',
  },
  {
    href: 'https://github.com/chrvaskos/card-sorting',
    name: 'Card Sorting Tool',
    desc: 'A card sorting tool that was created to be used in an experiment for my thesis entitled "Web usability: Task-based card sorting".',
    tags: ['React', 'Bootstrap', 'jQuery'],
    image: '/images/projects/cardsorting.webp',
  },
  {
    href: 'https://github.com/chrvaskos/barber-shop',
    name: 'Landing Page Redesign',
    desc: 'Local barber shop landing page redesign using Tailwind CSS.',
    tags: ['HTML', 'Tailwind CSS'],
    image: '/images/projects/barbershop.webp',
  },
  {
    href: 'https://github.com/chrvaskos/agency-landing-page',
    name: 'Agency Landing Page',
    desc: 'Sample landing page of an agency.',
    tags: ['React', 'Sass', 'Bootstrap'],
    image: '/images/projects/agencylanding.webp',
  },
  {
    href: 'https://github.com/chrvaskos/sample-portfolio',
    name: 'Sample Portfolio',
    desc: 'Single page website built with Gatsby and Sass. It includes an opening animation created with a GSAP timeline, a skew scrolling effect with pure JavaScript and more.',
    tags: ['Gatsby', 'Sass', 'GSAP'],
    image: '/images/projects/sampleportfolio.webp',
  },
  {
    href: 'https://github.com/chrvaskos/ar-episode2',
    name: 'Awwwards Rebuilt Website',
    desc: 'This is an Awwwards winning website rebuilt by following step-by-step a tutorial from the YouTube channel Wrong Akram. All credits for the code go to Wrong Akram for sharing his awesome knowledge with the world!',
    tags: ['Gatsby', 'styled-components', 'Framer Motion'],
    image: '/images/projects/arepisode.webp',
  },
]

const Projects: NextPage = () => {
  return (
    <Container title="Projects - Christoforidis Vasilis">
      <ProjectsSectionBox>
        <h1>Projects</h1>
        <ProjectsContainer>
          {projectsArr.map(proj => (
            <Project
              href={proj.href}
              key={proj.name}
              name={proj.name}
              description={proj.desc}
              tags={proj.tags}
              image={proj.image}
              headingLevel={2}
            />
          ))}
        </ProjectsContainer>
      </ProjectsSectionBox>
    </Container>
  )
}

export default Projects
