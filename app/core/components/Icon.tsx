const Glyph = ({ icon }: { icon: string }): JSX.Element | null => {
  switch (icon) {
    case "collection":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      )
    case "home":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      )
    case "menu":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )
    case "x":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
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
