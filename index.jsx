

import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './src/App'
import store from './src/components/store'
import {Provider} from 'react-redux'

// Render your React component instead
const root = createRoot(document.getElementById('app'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
