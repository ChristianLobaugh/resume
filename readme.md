# Resume

This is a basic resume that uses tailwindcss for styling and purgecss to shrink resulting css.  

I handle these manually rather than using any kind of post processor or bundler (seems like overkill for one page)

## files
index.html is the html source
main.css is the stylesheet referenced by index.html, but it is not the file to edit.
styles.css is the base css source to edit.  This will be compiled by tailwind into main.css which is then processed by purgecss into a smaller main.css.

## Workflow
The basic workflow when there are page/css changes is to run tailwind 

# NOTE - PurgeCss is not working correctly at this point.  It's being too aggressive.  I need to trouble shoot this
## I've pared down the breakpoints and colors used by tailwind to control the css file size for now

## Tailwind

### Installation
npm install tailwindcss
npx tailwindcss init

### Usage
npx tailwindcss build styles.css -o resume/main.css

## PurgeCss

purgecss is not built into Tailwind CSS as of 1.4

### Usage
make sure to add any source files to the purgeCSS section of the tailwind.config.js