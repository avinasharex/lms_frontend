# LMS frontend

### Setup instruction

1. Clone the project 

```
 git clone https://github.com/avinasharex/lms_frontend.git
```

2. Move into directory

```
cd client
```

3. Install dependencies

```
npm i
```

4. Run the server 

```
npm run dev
```

### Setup instruction for tailwind

[tailwind official instruction docs]https://tailwindcss.com/docs/installation

1. Install tailwindcss

```
npm install -D tailwindcss
```

2. Create tailwind config file

```
npx tailwindcss init
```

3. Add file extension to tailwind config file in the contents property

```
"./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directive at the top of the `index.css` file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```