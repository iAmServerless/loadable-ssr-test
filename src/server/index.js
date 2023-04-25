let express = require("express");
import React from 'react';
import path from 'path';
import reactDom from 'react-dom/server';
import App from './app';
import { ChunkExtractor } from '@loadable/server'

let app = express();
app.use(express.static('dist'))

const statsFile = path.resolve('./dist/loadable-stats.json')
const extractor = new ChunkExtractor({ statsFile })

app.get("/", (req, res, next) => {
    const html = reactDom.renderToString(extractor.collectChunks(<App />))
    const scriptTags = extractor.getScriptTags()
    const preloadTags = extractor.getLinkTags()
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        ${preloadTags}
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
        ${scriptTags} 
    </html>`);
})

app.listen(8080);