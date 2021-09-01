import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`

export const Content = styled.div`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${p => p.theme.text};
`
