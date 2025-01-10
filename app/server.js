import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import app from './app.js'

app.use('/*', serveStatic({ root: './public' }))

serve(app)