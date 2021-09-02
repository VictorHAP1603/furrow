import styled, { createGlobalStyle, css } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration:none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    font-size:15px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x:hidden;
  }

`

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

    // spaceBetween
    ${prop =>
      prop.spaceBetween &&
      css`
        justify-content: space-between;
      `}

    // flexEnd
    ${prop =>
      prop.flexEnd &&
      css`
        justify-content: flex-end;
      `}

    // alignTop
    ${prop =>
      prop.spaceBetween &&
      css`
        align-items: flex-start !important;
      `}

    // noHeight
    ${prop =>
      prop.noHeight &&
      css`
        height: 0;
      `}
`
