# Resume

This is a basic resume that uses tailwindcss for styling and purgecss to shrink resulting css.  

I handle these manually rather than using any kind of post processor or bundler (seems like overkill for one page)

## files
index.html is the html source
main.css is the stylesheet refeenced by index.html, but it is not the file to edit.
styles.css is the base css source to edit.  This will be compiled by tailwind into main.css which is then processed by purgecss into a smaller main.css.

## Workflow
The basic workflow when there are page/css changes is to run tailwind 

# NOTE - PurgeCss is not working correctly at this point.  It's being too aggressive.  I need to trouble shoot this

## Tailwind

### Installation
npm install tailwindcss
npx tailwindcss init

### Usage
npx tailwindcss build styles.css -o main.css

## PurgeCss

### Installation
npm i -g purgecss

### Usage
purgecss --config ./purgecss.config.js --output ./

