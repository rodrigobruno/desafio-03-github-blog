import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post.tsx'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
