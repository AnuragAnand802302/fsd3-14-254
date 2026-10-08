# Components
1. Simple js function return html directory
2. It must starts with Capital letters
3. It should be treated as html Tag
4. It must be closed

`const {price,picUrl} = props.book` will store value of `price` and `picUrl` from the props
any components includes style 

# inline css
In this method we use two `{}` with style attributes, all the css property must be single word. for example `text-align` becomes `textAlign`

* App.jsx must have minimum codebase
* by default button in html is submit button

# steps to install tailwind in vite react project
1. type in terminal `npm install tailwindcss @tailwindcss/vite`
2. open `vite.config.js`
3. add this code `import tailwindcss from '@tailwindcss/vite'` to your vite.config.js
4. update `defineconfig` in `vite.config.js` to 
```
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
```
5. open src/index.css and remove all content and add `@import "tailwindcss";`