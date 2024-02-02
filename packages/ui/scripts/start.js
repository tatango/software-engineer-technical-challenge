import { spawn } from 'child_process'
const vite = spawn('yarn', ['vite', '--port', '1337'], { stdio: 'inherit' })

process.stdin.resume() // Keep stdin open
process.on('SIGINT', () => vite.kill('SIGINT')) // Handle Ctrl+C gracefully
