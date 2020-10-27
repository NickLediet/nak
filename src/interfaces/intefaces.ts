

export interface ICommandOptionConfig {
    name: string;
    type: string;
    alias ?: string;
    description ?: string;
}

export interface ICommandConfig {
    name: string;
    class: string;
    description ?: string;
    options: Array<ICommandOptionConfig>
}