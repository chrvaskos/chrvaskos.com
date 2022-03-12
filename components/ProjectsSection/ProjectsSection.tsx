import ArrowLink from 'components/ArrowLink'
import {
  ProjectsContainer,
  ProjectsSectionBox,
} from 'styles/ProjectsSectionStyles'
import { motion } from 'framer-motion'
import type { WithChildren } from 'types'

type ProjectProps = WithChildren<{}>

const ProjectsSection = (props: ProjectProps): JSX.Element => {
  const { children } = props

  return (
    <ProjectsSectionBox>
      <motion.h3
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 72, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.6, 0.05, -0.01, 0.9],
          delay: 1.65,
        }}
      >
        Featured Projects
      </motion.h3>
      <ProjectsContainer
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 72, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.6, 0.05, -0.01, 0.9],
          delay: 1.75,
        }}
      >
        {children}
      </ProjectsContainer>
      <ArrowLink
        href="/projects"
        text="View all projects"
        transitionDelay={1.9}
      />
    </ProjectsSectionBox>
  )
}

export default ProjectsSection
