import React from 'react'
import AppRoutes from './app.routes'
import { AuthProvider } from './features/auth/auth.context.jsx'
import {  PostContextProvider } from './features/post/postContext.jsx'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <PostContextProvider>
          <AppRoutes />
        </PostContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App
