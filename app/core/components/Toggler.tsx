import { useState } from "react"

type Props = {
  children: (
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element | null
}

export const Toggler: React.FC<Props> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return children(isActive, setIsActive)
}
