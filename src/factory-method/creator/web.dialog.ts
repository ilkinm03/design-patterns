import { Dialog } from "./dialog";
import { IButton } from "../dialog.interface";
import { WebButton } from "../product/web.button";

export class WebDialog extends Dialog {
    public factoryMethod(): IButton {
        return new WebButton();
    }
}