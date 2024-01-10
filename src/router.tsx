import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
