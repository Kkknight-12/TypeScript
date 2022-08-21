### run

`npm init -y`

### install server lite

`npm i lite-server -D`

### create ts config file

`tsc --init`

### make these changes

`"exclude":[ "node-module" // it is default ], "include": [ "app.ts" // will only include app.ts | can also target folder ] "outDir": "./dist" "rootDir": "./src"`

### create src folder in root dir than and app.ts inside it

### create dist folder in root dir

### add this to package.json

`"start": "lite-server"`

### use the below code to start server

`npm start`
