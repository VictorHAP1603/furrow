import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;

  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 400px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${p => p.theme.text};

  h3 {
    font-size: 1.4rem;
  }

  .meta {
    display: flex;
    /* align-items: center; */
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }

  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;

      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${p => p.theme.text};
        }
      }
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 400px;
  top: 0;
  display: block;
  overflow: hidden;
`

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background-color: ${p => p.theme.red};
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;

    span {
      margin-right: 100px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background-color: #fff;
      transform: translateY(-50%);
    }
  }
`
