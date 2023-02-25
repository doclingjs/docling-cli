import { parse } from "https://deno.land/std@0.175.0/flags/mod.ts"

const VERSION = '0.1'


let flags = parse(Deno.args, {
    string: [ "text", "lexicon" ],
    boolean: ["help", "version"],
    alias: {
      t: "text",
      l: "lexicon",
      v: "version",
      h: "help"
    }
  })


if(flags.version){
  console.log(VERSION)
  Deno.exit()
}

let printUsage = () => console.log(
`Command line utility tool for docling.js 
  Generates some useful files for docling.js.

INSTALL:
  deno install --allow-net --allow-read "https://raw.githubusercontent.com/doclingjs/docling-cli/main/docling-cli.js"
  
USAGE:
  docling-cli [command] [options]
OPTIONS:
  -t, --text    <URL> generate a text-view.html for JSON at URL
  -l, --lexicon <URL> generate a lexicon-view.html for JSON at URL
  -h, --help               Prints help information`
)



if (flags.help) {
  console.log(`help`)
  printUsage()
  Deno.exit()
}


/* basic text-view */
let generateTextFor = url => `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Text view</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://docling.net/book/docling/text/text-view/text-view.css">
</head>
<body>

<text-view src="${url}"></text-view>

<script type=module>
import {TextView} from 'https://docling.net/book/docling/text/text-view/TextView.js'
let textView = document.querySelector('text-view')

Object.assign(window, {TextView})
</script>
</body>
</html>
`

if (flags.text) {
  let textHTML = generateTextFor(flags.text)
  console.log(textHTML)
  Deno.exit()
}
