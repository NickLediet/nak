import Command from '../../Command';

export default class TestCommand extends Command {
    execute() {
        console.log('we did it! from test')
    }
}