import { Link } from "gatsby"
import React, { useEffect } from "react"
import { Container, Flex } from "../../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "./style"

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"

const Header = () => {
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.1, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">FURR</Link>
            <span onClick={toggleTheme}></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
