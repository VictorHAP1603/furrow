import { motion } from "framer-motion"
import styled from "styled-components"

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: ${p => p.theme.red};
    display: block;
    font-weight: 3 00;
  }
`

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${p => p.theme.red};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background-color: ${p => p.theme.red};
    transition: 0.1 ease-in-out;
  }
`
