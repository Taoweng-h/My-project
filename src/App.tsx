import React from 'react'
import MyRoute from '@/routes/index'

function App() {
  return (
    <div className="App">
      <React.Suspense>
        <MyRoute></MyRoute>
      </React.Suspense>
    </div>
  )
}

export default App
