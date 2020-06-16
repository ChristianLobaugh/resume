# Resume

This is a resume built with HTML that uses tailwindcss for styling.  

I handle building the css manually rather than using any kind of post processor or bundler (seems like overkill for one page)

## files
- index.html is the html source
- styles.css is the css source for editing.  This will be compiled by tailwind into main.css which is what is actually used by the page. 

## Workflow
- The basic workflow is that when there are changes made to the styles.css or tailwind.config, you will need to run tailwind build.
- I also recommend setting the tailwind.config purge setting to disabled during development so you can see your changes without needing to rebuild.  (Purge will remove any css not used, so if you change the css classes in your html, you will not see the changes as purge deleted them).  Be sure to set this option back to true before deploying to production.

### Note:
You will need to create a pdf for your resume by yourself.  This is easy enough using the browser's Print to PDF function.  

## Tailwind

### Installation
```
npm install tailwindcss
npx tailwindcss init
```
### Usage
```
npx tailwindcss build styles.css -o resume/main.css
```

## PurgeCss
- Purgecss will examine your source files and remove any unused css to make your final css MUCH smaller.
- Purgecss is built into Tailwind CSS as of 1.4

### Usage
Make sure to add any source files to the purgeCSS section of the tailwind.config.js