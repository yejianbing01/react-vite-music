import { Link, useRoutes } from "react-router-dom"
import routers from '@/router'
import { Suspense } from "react"

function App() {
  return (
    <>
      <ul>
        <li><Link to="/discover">发现音乐</Link></li>
        <li><Link to="/mine">我的音乐</Link></li>
        <li><Link to="/focus">关注</Link></li>
        <li><Link to="/download">下载客户端</Link></li>
      </ul>
      <Suspense fallback="">
        <div>{useRoutes(routers)}</div>
      </Suspense>
    </>
  )
}

export default App
