

// const yargs = require('yargs');
import * as fs from 'fs';
import YamlParser from './services/YamlParser';
import ICommand from './interfaces/ICommand';
import { ICommandConfig } from './interfaces/intefaces';

export default class NakApp {
    private yamlParser: YamlParser;
    
    constructor() {
        this.yamlParser = new YamlParser();
        this.registerCommands();
    }

    
    private registerCommands(): void {
        const commandDirectories = fs.readdirSync(`${__dirname}/commands`);
        
        commandDirectories.forEach(async (command: string) => {
            const commandDirectoryPath = `${__dirname}/commands/${command}`;
            const config: ICommandConfig = await this.yamlParser.parseFile(`${commandDirectoryPath}/${command}.command.yml`);
            
            const commandClass = require(`${commandDirectoryPath}/${config.class}`);

            const commandInstance: ICommand = new commandClass();
            commandInstance.execute();

        });
    }

    _getCommands() {
    }

}