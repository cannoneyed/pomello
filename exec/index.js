#! /usr/bin/env node
import program from 'commander'
import { processPage } from './script'

program
    .arguments('<url>')
    .option('-p, --page <page>', 'The name of the page to generate tests for')
    .option('-r, --root <rootSelector>', 'The root selector to find components from')
    .action((url, options) => {
        return processPage({
            url,
            page: options.page,
            rootSelector: options.root,
        })
    })
    .parse(process.argv)
