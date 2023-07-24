import { useEffect, useRef } from "react"
import { StyledModalOverlay, StyledModalBox } from "./styles"

interface IModalProps {
  children: React.ReactNode;
  title: string;
  setModalState: () => void;
  styleModal?: "shoppingCart" | "adminModal"
}

export const Modal = ({ children, title, setModalState, styleModal }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        setModalState()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        buttonRef.current?.click()
        setModalState()
      }
    }

    window.addEventListener("mousedown", handleOutClick)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("mousedown", handleOutClick)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <StyledModalOverlay role={"dialog"}>
      <StyledModalBox stylesModal={styleModal} ref={modalRef}>
        <header>
          {title}
          <button onClick={() => setModalState()}>X</button>
        </header>
        {children}
      </StyledModalBox>
    </StyledModalOverlay>
  )
}