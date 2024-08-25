import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'layouts': resolve(__dirname, 'src/layouts'),
      'pages': resolve(__dirname, 'src/pages'),
      'components': resolve(__dirname, 'src/components'),
      'asset': resolve(__dirname, 'src/asset'),
    },
  },
})
