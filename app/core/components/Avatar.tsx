type Props = {
  userImage?: string
  userName: string
}

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

export const Avatar = ({ userImage, userName }: Props) => {
  if (userImage) {
    return <img className="w-8 h-8 rounded-full" src={userImage} alt={userName} />
  } else {
    return <img className="w-8 h-8 rounded-full" src={IMAGE_SRC} alt={userName} />
  }
}
