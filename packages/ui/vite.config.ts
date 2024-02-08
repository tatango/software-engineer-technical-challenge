import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const codespaceName = env.CODESPACE_NAME
  const URL = codespaceName
    ? `https://${codespaceName}-1984.${env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
    : `http://localhost:1984`

  return {
    plugins: [react()],
    define: {
      'process.env.API_URL': JSON.stringify(URL),
    },
  }
})
