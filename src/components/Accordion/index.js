import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"

import { AccordionContent, AccordionHeader, AccordionIcon } from "./style"
import { useGlobalStateContext } from "../../context/globalContext"

const Accordion = ({ title, id, results, expanded, setExpanded, onCursor }) => {
  const isOpen = id === expanded
  const [hovered, setHovered] = useState(false)

  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <AccordionHeader
        onMouseOver={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        onClick={() => setExpanded(isOpen ? false : id)}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{
          color: currentTheme === "dark" ? "#fff" : "#000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {title}
      </AccordionHeader>

      <AccordionContent
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        key="content"
        animate={{ height: isOpen ? "100%" : 0 }}
      >
        {results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default Accordion
