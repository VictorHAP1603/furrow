import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled components
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/globalStyles"

// components
import Header from "./Header"
import CustomCursor from "./CustomCursor"
import Navigation from "./Navigation"

// hooks
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
  }
  const dispatch = useGlobalDispatchContext()
  const { currentTheme, cursorStyles } = useGlobalStateContext()

  const theme = currentTheme === "light" ? lightTheme : darkTheme

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
