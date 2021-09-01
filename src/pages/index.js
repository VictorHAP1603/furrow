import React from "react"

import Layout from "../components/layout"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"

// sections
import HomeBanner from "../components/HomePage/HomeBanner"
import HomeContent from "../components/HomePage/HomeContent"
import HomeFeatured from "../components/HomePage/HomeFeatured"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
