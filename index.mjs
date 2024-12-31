#!/usr/bin/env node

import { program } from 'commander';
import axios from 'axios';
import chalk from 'chalk';

program.version('1.0.0').description('CLI for making HTTP requests');

program.command('get <url>').description('Make a GET request').action(async (url) => {
    try {
        const response = await axios.get(url);
        console.log(chalk.greenBright(JSON.stringify(response.data, null, 2)))
    } catch (error) {
        console.error(chalk.redBright(error.message))
    }
});

program.command('post <url> [data...]').description('Make a POST request').action(async (url, data) => {
    try {
        const response = await axios.post(url, data);
        console.log(chalk.greenBright(JSON.stringify(response.data, null, 2)))
    } catch (error) {
        console.error(chalk.redBright(error.message));
    }
});

program.parse(process.argv);
