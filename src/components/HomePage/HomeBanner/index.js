import React, { useEffect, useRef } from "react"

import { Banner, Video, Canvas, BannerTitle, HeadLine } from "./style"

// context
import { useGlobalStateContext } from "../../../context/globalContext"

//custom hook
import useWindowSize from "../../../hooks/useWindowSize"

const HomeBanner = ({ onCursor }) => {
  let canvas = useRef(null)

  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    if (!canvas.current) return

    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"

        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop

        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY

        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })

    // console.log
  }, [currentTheme])

  const parent = {
    initial: {
      y: 800,
    },
    animate: {
      y: 0,
      transition: {
        straggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: {
      y: 800,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          src={require("../../../assets/video/video.mp4")}
          height="100%"
          width="100%"
          loop
          autoPlay
          muted="muted"
        ></video>
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseLeave={onCursor}
        onMouseEnter={() => onCursor("hovered")}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <HeadLine variants={child} initial="initial" animate="animate">
          DIG
        </HeadLine>
        <HeadLine variants={child} initial="initial" animate="animate">
          DEEP
        </HeadLine>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
