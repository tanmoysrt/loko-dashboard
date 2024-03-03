import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'


// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { ChakraProvider } from '@chakra-ui/react'

// Create a new router instance
const router = createRouter({ routeTree })


// Render the app
const rootElement = document.getElementById('app')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </StrictMode>,
  )
}