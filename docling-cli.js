import { parse } from "https://deno.land/std@0.175.0/flags/mod.ts"

const VERSION = '0.2'


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
`docling-cli [version ${VERSION}]

Command line utility tool for docling.js 
  Generates some useful files for docling.js.

INSTALL:
  deno install --allow-net --allow-read "https://raw.githubusercontent.com/doclingjs/docling-cli/main/docling-cli.js"
  
USAGE:
  docling-cli [command] [options]
OPTIONS:
  -v, --version report version
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
  <meta name="generator" content="docling-cli" />
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



/* basic lexicon-view */
let generateLexiconFor = url => `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Lexicon view</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://docling.net/book/docling/lexicon/lexicon-view/lexicon-view.css">
  <meta name="generator" content="docling-cli" />
</head>
<body>

<lexicon-view src="${url}"></lexicon-view>

<script type=module>
import {LexiconView} from 'https://docling.net/book/docling/lexicon/lexicon-view/LexiconView.js'
let lexiconView = document.querySelector('lexicon-view')

Object.assign(window, {LexiconView})
</script>
</body>
</html>
`

if (flags.lexicon) {
  let lexiconHTML = generateLexiconFor(flags.lexicon)
  console.log(lexiconHTML)
  Deno.exit()
}
