import { memo, Suspense } from "react"
import type { FC, ReactNode } from "react"
import { Link, Outlet } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <>
      <ul>
        <li><Link to="/discover/recommend">推荐</Link></li>
        <li><Link to="/discover/ranking">排行榜</Link></li>
        <li><Link to="/discover/songs">歌单</Link></li>
        <li><Link to="/discover/djradio">主播电台</Link></li>
        <li><Link to="/discover/artist">歌手</Link></li>
        <li><Link to="/discover/album">新碟上架</Link></li>
      </ul>
      <div>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default memo(Discover)
