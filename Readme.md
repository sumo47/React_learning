* js engine gives us window functon

 Q- what is minify our app

<!-- BUNDLERS : Vite , parcel, webpack -->
* node-modules -- database of our project
* module can import and export , we can not import script
(we have to specify type="module" in html script)
* while we importing reactDOM from react-dom we have to import from react-dom/client
* Anything which we can generate on server can we put inside gitignore
* react uses much things to get fast
* npx is use for executing
* npm start is shortcut of npm run start
* to remove clonsole.log use -- babel-plugin-transform-remove-console
* Render means something updating in DOM
* if we do not provide key than react has to do render dom , and it takes time , but when we will provide key than react just takes less effort to update
* babel convert jsx to React.createElement , babel is javascript trancscompiler , babel comes along with parcel
* Component composition -  if i had to use component inside component , it's called component composition

* Reac.Fragment - it is a component we wrap jsx into React.Fragment
  - jsx expression must have one parent element
  - ex = <React.Fragment>jsx<React.Fragment/> / <>jsx</>
  - we can write React.Fragment as empty tag
* Virtual dom = it is representation of Dom 
* Reconciliation = it is a process in react used diff algorithm that finds out the difference between tree ,
  - it will re-render only the difference portion in web (more works of Reconciliation)

* React Fiber - it is new Reconciliation engine in React 16
* function fn (parameter){}
* fn(argument)

# two ways we can do to Load the Page - 
  - load page - call the API - render page ---- ❌
  - render page - api call - update UI -------- ✔️


# useEffect 
```bash 
useEffect(() => {
        console.log("call this when dependancy changes")
    }, [SearchText])
```
    // call back function not called immediately , it will call when my useEffect wants to call 
    // if we don't  wan't to call useEffect-callBack anytime , - pass in dependancy arry in to it
    // overall - useEffect takes two parameters - 1. callback function 2.  dependancy array
    // [] - Empty array - determines that call once after initial render (reload)
    // [SearchText] -once after initial render +  whenever SearchText changes useEffect will call again and again


# Can we write all javascript in jsx
 - we can write javascript expression instead of statement
 - we can change javascript statement to javascript expression
  - ex -
     ``` statement = a = 10, ```
         ```console.log(a) expression - ((a = 10),```
         ```console.log(a))```

# useState - 
 - useState is a hook which react gives you to create local state varaible inside your functonal component 

* never create component inside component
* never create variable / useState inside if-else / case statement / for loop

* never create useState inside useEffect // by tabnine(ai)
* Error -```import { useRouteError } from 'react-router-dom'```
* Route Error Handle - ```bash {path: "/", errorElement:<Error/>, element: <AppContent /> }```
* Types of Route - 
  1. client side route  - we don't want to load anyhing from server
  2. Server side route\
* Create component to make your code moduler, reusable, cleaner , maintaintable , testable
* Link component using Ancor tag behind the seen
* Hook == create hook instead of Normal function

* Modularity = we have boken down our code to meaningfull peaces
* Lazy Loading / chunking => we use lazy function to load component on Demant 
    ```const InstaMart = lazy(() => import("./components/instaMart")) ```
    * problem -  upon loading  the page - it will take time to load the component so react suspend render it
    * overcome - to overcome it we use Suspance function which will be called when the component is loaded again 
      ```bash
          <Suspense fallback = {<SimmerUI/>}>
            <InstaMart />
          </Suspense>) 
    * Suspense = we use suspense to show loading animation while component is loading
    * fallback - while again the component is loading , till simmerUI will show
    * note - for small project chunking is not neccessary

# Tailwind Css 
 * override all css
 * easy to debug 
 * less code is shipped 
 * no duplicate css
 * bundle size is small
  
* Prop Drilling - when we pass data using props from parent component to child component and to their child component  and so on 
* Profiling from react dev lools - have to read





<!--parcel does --- >
HMR - Hot Module Replacement 
File Watcher algorithm - c++
Building
minifying
cleaning our code
Dev abd production Build
Super Fast build algorithm
Image Optimization 
Caching while development
Compression
Compatble with older version of browser
HTTPS on dev  (npx parcel index.html --https)
port Number
Consistent Hashing Algorithm
Zero Config
Tree Shaking - Removing un-wanted




Transitive Dependencies

-->


HMR - hot module reload -- parcel have this feature -- using file watcher algorithm -- written in c++

command i have used -- 
npm init 
npm install -d parcel  <!--to install parcel for development environment , not for production  (-d)  // same thing ->  npm install parcel --save-dev parccel -->
npm i react  react-dom
npm install --save-dev parcel-bundler
npx parcel index.html  <!-- index.html is entry point  of our app ,  npx means execute using npm -->
 - when i write `"npx parcel index.html"` it just create a development build for us and host on the server 

# How do i tell parcel that make a production build? 
 - we will include `build` command in it
 ```bash
   npx parcel build index.html
   ```
 <!-- after build it will minify our app,cleaning code (remove console , etc),
 parcel will build all the production files on dist folder
 -->
 



Here's an enhanced version of your notes for the README file:

---

## JavaScript Engine and Window Function

- **JavaScript Engine**: Provides the `window` function, which is a global object in browsers.
  
## Minifying an Application

- **Minification**: The process of removing unnecessary characters (like spaces, comments, etc.) from code to reduce file size and improve load time.

## Bundlers: Vite, Parcel, Webpack

- **Bundlers**: Tools like **Vite**, **Parcel**, and **Webpack** are used to bundle JavaScript files for use in a browser. These tools handle modern JavaScript features, and bundling helps to optimize application delivery.

## Node Modules

- The `node_modules` directory stores all the dependencies (packages) for a project.
- **Modules**: JavaScript files that export or import pieces of functionality to enable modular design. 
  - Note: When using modules in the browser, include `type="module"` in the HTML `<script>` tag to enable module syntax.
  
## React and ReactDOM

- When importing `ReactDOM`, use:
  ```javascript
  import ReactDOM from 'react-dom/client';
  ```
  instead of just `react-dom`.

## Hot Module Reloading (HMR)

- **HMR** (Hot Module Reloading) is a feature of some bundlers, such as **Parcel**, that enables automatic reloading of modules when files are modified, without a full page refresh.
- Parcel uses a **file watcher algorithm**, written in C++, for efficient HMR.

## Commands Used

1. Initialize a new Node.js project:
   ```bash
   npm init
   ```

2. Install Parcel for the development environment:
   ```bash
   npm install -D parcel
   ```

3. Install React and ReactDOM:
   ```bash
   npm i react react-dom
   ```

4. Install Parcel bundler as a development dependency:
   ```bash
   npm install --save-dev parcel-bundler
   ```

5. Run Parcel (set `index.html` as the entry point of the app):
   ```bash
   npx parcel index.html
   ```

   - `npx` runs the Parcel command using npm.
   - The entry point (`index.html`) is the starting file that Parcel will bundle.

---

This updated version adds more structure and clarity for easier understanding. You can include this in your project's README file to explain the tools and commands you're using.
