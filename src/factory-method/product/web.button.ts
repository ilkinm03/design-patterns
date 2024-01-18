import { IButton } from "../dialog.interface";

export class WebButton implements IButton {
    onClick(): string {
        return "Result of the WebButton";
    }
}