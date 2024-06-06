import { resolve, relative, extname } from 'path';
import { glob } from 'glob';
import handlebars from 'vite-plugin-handlebars';

let sourceFiles = await glob('src/**/*.html', { ignore: 'src/components/**' })
let input = Object.fromEntries(sourceFiles.map(file => [relative('src', file.slice(0, file.length - extname(file).length)), resolve(__dirname, file)]))

let componentFiles = await glob('src/components/**', { withFileTypes: true })
let partialDirs = componentFiles.filter(file => file.isDirectory()).map(dir => dir.fullpath())

export default {
    root: "./src",
    publicDir: "../public",
    server: {
        host: true,
    },
    build: {
        outDir: "../build",
        emptyOutDir: true,
        rollupOptions: {
            input: input,
        },
    },
    preview: {
        host: true,
        port: 8080,
    },
    plugins: [handlebars({
        partialDirectory: partialDirs
    })],
}
