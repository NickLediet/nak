export default class Command {
    constructor() {}
    execute() {};
}


/**
 * - for each command directory:
 * - parse the yml file
 * - JSON'ify the configs
 * - Look over config data and map command callback to the class responsible for the command
 */