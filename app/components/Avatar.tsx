'use client'

import Image from "next/image"

interface AvatarProps {
  src: string | undefined | null
}

const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <div>
      <Image className="rounded-full" width='30' height='30' alt="avatar" src={src || '/images/placeholder.jpg'} />
    </div>
  )
}

export default Avatar
