import { parse } from "https://deno.land/std@0.175.0/flags/mod.ts"

const VERSION = '0.1'


let flags = parse(Deno.args)

let subcommand = flags._[0]

flags.subcommand = subcommand

let validate = () => {
  let {file} = flags
  let type = file.split('-').pop().split(".")[0]
  console.log(`validate ${type}`);
}

let generate = () => {
  let {file} = flags
  let htmlFile = file.replace('json', 'html')
  console.log(`generate ${htmlFile} for ${file}`);
}

let convert = () => {
  let {from, to} = flags
  console.log(`convert ${from} to ${to}`);

}

switch(flags.subcommand){
  case "validate":
    validate()
    break;
  case "convert":
    convert()
    break;
  case "generate":
    generate()
    break;
  default:
    printUsage()
    break;
}