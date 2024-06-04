import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    root: "./src",
    build: {
        outDir: "../build",
        emptyOutDir: true
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/components')
    })],
}