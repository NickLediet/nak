import ICommand from "../../interfaces/ICommand";

import Command from '../../Command';


export default class XMLRPCCommand extends Command implements ICommand {
    execute() {
        console.log('we did it!')
    }
}