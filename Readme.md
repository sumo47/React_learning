* js engine gives us window functon

Q what is minify our app

<!-- BUNDLERS : Vite , parcel, webpack -->
node-modules -- database of our project
* module can import and export , we can not import script
(we have to specify type="module" in html script)
* while we importing reactDOM from react-dom we have to import from react-dom/client
* Anything which we can generate on server can we put inside gitignore
* react uses much things to get fast


<!--parcel does --- >
HMR - Hot Module Reloading 
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




Transitive Dependencies

-->


HMR - hot module reload -- parcel have this feature -- using file watcher algorithm -- written in c++

command i have used -- 
npm init 
npm install -d parcel  <!--to install parcel for development environment , not for production  (-d)  // same thing ->  npm install parcel --save-dev parccel -->
npm i react , react-dom
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
