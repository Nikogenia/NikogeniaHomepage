import { resolve, relative, extname } from 'path';
import { glob } from 'glob';
import handlebars from 'vite-plugin-handlebars';

let htmlFiles = await glob('src/**/*.html', { ignore: 'src/components/**' })
let input = Object.fromEntries(htmlFiles.map(file => [relative('src', file.slice(0, file.length - extname(file).length)), resolve(__dirname, file)]))

export default {
    root: "./src",
    publicDir: "../public",
    build: {
        outDir: "../build",
        emptyOutDir: true,
        rollupOptions: {
            input: input,
        },
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/components')
    })],
}
