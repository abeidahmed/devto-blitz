import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"

type Props = {
  children: (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element | null
}

export const Toggler = ({ children }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
      {children(isActive, setIsActive)}
    </OutsideClickHandler>
  )
}
