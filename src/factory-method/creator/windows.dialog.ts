import { Dialog } from "./dialog";
import { IButton } from "../dialog.interface";
import { WindowsButton } from "../product/windows.button";

export class WindowsDialog extends Dialog {
    public factoryMethod(): IButton {
        return new WindowsButton();
    }
}