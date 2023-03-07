# docling-cli

A command-line tool for various docling.js-related tasks


This is a [deno](https://deno.land/)-based command-line tool that does various tasks related to doclingjs data and workflows. 


More docs to come, but for now, here’s the tool’s help output:

```
$ docling-cli --help
help
docling-cli [version 0.2]

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
  -h, --help               Prints help information
  ```
