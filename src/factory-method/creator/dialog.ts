import { IButton } from "../dialog.interface";

export abstract class Dialog {
    public abstract factoryMethod(): IButton;

    public onClick(): string {
        const dialog = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${dialog.onClick()}`;
    }
}