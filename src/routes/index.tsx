import React, { lazy } from 'react'

// Lazy load components to reduce initial load time
// Lazy loaded components need to be paired with the Suspense component which can be found in src/components/Layout/index.tsx
const Home = lazy(() => import('../pages/Home'))

const routes = [{ path: '/', element: <Home /> }]
export default routes
