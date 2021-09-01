import React, { useState } from "react"
import { Link } from "gatsby"
import { ArrowIcon } from "../../assets/svg/social-icons"
import { AnimatePresence, motion } from "framer-motion"

// styles components

import { Container, Flex } from "../../styles/globalStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "./style"

const navRoutes = [
  {
    id: 0,
    title: "NOT HUMBLE",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "NOT HUMBLE",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 4,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 5,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: 0,
  })

  return (
    <Nav
      // onMouseEnter={() => onCursor("hovered")}
      toggleMenu={toggleMenu}
      animate={{
        width: toggleMenu ? "100%" : 0,
        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
      }}
    >
      <Container>
        <NavHeader>
          <Flex spaceBetween noHeight>
            <h2>Projects</h2>
            <CloseNav>
              <button
                onClick={() => setToggleMenu(false)}
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
              >
                <span></span>
                <span></span>
              </button>
            </CloseNav>
          </Flex>
        </NavHeader>
        <NavList>
          <ul>
            {navRoutes.map(({ id, path, video, title }) => (
              <motion.li
                key={id}
                onHoverStart={() =>
                  setRevealVideo({
                    video,
                    show: true,
                    key: id,
                  })
                }
                onHoverEnd={() =>
                  setRevealVideo({
                    video,
                    show: false,
                    key: id,
                  })
                }
              >
                <Link to={`projects/${path}`}>
                  <motion.div
                    initial={{ x: -100 }}
                    whileHover={{
                      x: -40,
                      transition: {
                        duration: 0.4,
                        ease: [0.6, 0.05, -0.1, 0.9],
                      },
                    }}
                    className="link"
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <span className="arrow">
                      <ArrowIcon />
                    </span>
                    {title}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </NavList>
        <NavFooter></NavFooter>

        <NavVideos>
          <motion.div
            animate={{
              width: revealVideo.show ? "0%" : "100%",
              transition: { duration: 0.4 },
            }}
            className="reveal"
          ></motion.div>
          <div className="video">
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.video
                key={revealVideo.key}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                src={require(`../../assets/video/${revealVideo.video}`)}
                loop
                autoPlay
                muted="muted"
              ></motion.video>
            </AnimatePresence>
          </div>
        </NavVideos>
      </Container>
    </Nav>
  )
}

export default Navigation
