import React, { useEffect, useState } from "react"
import { Container, Flex } from "../../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from "./style"

import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { ArrowIcon } from "../../../assets/svg/social-icons"
import { Link } from "gatsby"

const HomeFeatured = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)

  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start(`visible`)
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Link>
          <FeaturedContent
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h4>PEI Seafood</h4>
                <h4>2019</h4>
              </motion.div>
            </Flex>

            <h2 className="featured-title">
              NOT <br /> HUMBLE
              <span className="arrow">
                <ArrowIcon
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                />
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              src=""
              muted="muted"
              loop
              autoPlay
              src={require("../../../assets/video/featured-video.mp4")}
            ></video>
          </FeaturedVideo>
        </Link>
      </Container>

      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
