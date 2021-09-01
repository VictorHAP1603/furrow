import styled from "styled-components"

export const Cursor = styled.div`
  position: absolute;

  width: 32px;
  height: 32px;

  background: ${p => (p.toggleMenu ? p.theme.text : p.theme.red)};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, border, transform;

  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${p => p.theme.red};
  }

  &.pointer {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${p => p.theme.text};
  }
`
