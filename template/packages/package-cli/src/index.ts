#!/usr/bin/env node

import program from "commander";
import chalk from "chalk";

import { init } from "<%= name %>";

program
  .version(`<%= name %> ${require("../package.json").version}`)
  .usage("<command> [options]");

program
  .command("init [dir]")
  .description("<%= description %>")
  .option("-d, --dest <dest>", "dest")
  .action(async (dir, options) => {
    console.log(chalk.blueBright("   to be start\n"));
    console.log({
      dir,
      dest: options.dest,
    });
    await init();
  });

program.parse(process.argv);
