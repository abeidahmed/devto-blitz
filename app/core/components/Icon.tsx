const Glyph = ({ icon }: { icon: string }): JSX.Element | null => {
  switch (icon) {
    case "menu":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )
    default:
      return null
  }
}

type IconProps = {
  icon: string
  type?: "fill" | "stroke"
  className?: string
  height?: number
  width?: number
  "aria-label"?: string
}

export const Icon = ({ icon, type = "stroke", ...props }: IconProps): JSX.Element => {
  let viewBox: string
  let fill: string
  let stroke: string

  if (type === "stroke") {
    viewBox = "0 0 24 24"
    fill = "none"
    stroke = "currentColor"
  } else {
    viewBox = "0 0 20 20"
    fill = "currentColor"
    stroke = "none"
  }

  return (
    <svg fill={fill} stroke={stroke} viewBox={viewBox} {...props}>
      <Glyph icon={icon} />
    </svg>
  )
}
