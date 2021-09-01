import React, { createContext, useContext, useReducer } from "react"

// define the context

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }

    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: localStorage.getItem("theme") || "light",
    cursorType: false,
    cursorStyles: ["pointer", "hovered"],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
