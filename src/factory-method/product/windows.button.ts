import { IButton } from "../dialog.interface";

export class WindowsButton implements IButton {
    public onClick(): string {
        return "Result of the WindowsButton";
    }
}