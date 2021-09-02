import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeAboutSection = styled(motion.div)`
  margin-bottom: 200px;
`

export const About = styled.div`
  width: 100%;
  align-self: flex-start;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${p => p.theme.text};
  }

  p {
    max-width: 448px;
    line-height: 1.6rem;
    font-size: 1rem;
    margin-left: 124px;
    color: ${p => p.theme.text};
  }
`

export const Services = styled.div`
  h3 {
    color: ${p => p.theme.text};
  }
`
