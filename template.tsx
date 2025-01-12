import { memo } from "react"
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = () => {
  return (
    <div>
      Discover
    </div>
  )
}

export default memo(Template)
