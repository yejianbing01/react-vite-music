import { Link, useRoutes } from "react-router-dom"
import routers from '@/router'
import { Suspense } from "react"
import { appShallowEqual, useAppDispatch, useAppSelector } from "./store"
import { decrement, increment } from "./store/modules/counter"

function App() {
  const count = useAppSelector(state => state.counter.value, appShallowEqual)
  const dispatch = useAppDispatch()

  const onIncrement = () => dispatch(increment())
  const onDecrement = () => dispatch(decrement())

  return (
    <>
      <ul>
        <li><Link to="/discover">发现音乐</Link></li>
        <li><Link to="/mine">我的音乐</Link></li>
        <li><Link to="/focus">关注</Link></li>
        <li><Link to="/download">下载客户端</Link></li>
      </ul>
      <h2>当前计数：{count}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>

      <Suspense fallback="">
        <div>{useRoutes(routers)}</div>
      </Suspense>
    </>
  )
}

export default App
