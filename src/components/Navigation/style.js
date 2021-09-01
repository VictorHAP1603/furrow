import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: ${p => p.theme.red};
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;

  h2 {
    color: ${p => p.theme.background};
  }
`

export const CloseNav = styled.div`
  z-index: 100;
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    outline: none;
    background: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background-color: ${p => p.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    z-index: 100;

    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;

      .link {
        color: ${p => p.theme.background};
        position: relative;
        display: flex;
        align-items: center;

        .arrow {
          height: 76px;
          margin-right: 8px;

          svg {
            width: 100px;
            path {
              fill: ${p => p.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div``

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  height: 100%;
  width: 100%;
  background: #000;

  .reveal {
    /* width: 0%; */
    background-color: ${p => p.theme.red};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    /* transition: width 0.2s; */
    z-index: 10;
  }

  .video {
    background-color: #000;
    position: absolute;
    height: 100%;
    margin: 0;

    video {
      height: 100%;
    }
  }
`
