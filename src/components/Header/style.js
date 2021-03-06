import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.header)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${p => p.theme.text};
  }

  span {
    height: 1rem;
    width: 1rem;
    background: ${p => p.theme.red};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`
export const Menu = styled.nav`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background-color: ${p => p.theme.text};
      margin: 8px;
    }
  }
`
