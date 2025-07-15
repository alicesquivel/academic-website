import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'atomize',
      'styletron-engine-atomic',
      'styletron-react',
      'react-transition-group',
      'react-transition-group/Transition'
    ]
  },
  resolve: {
    alias: {
      'react-transition-group': 'react-transition-group'
    }
  }
})
