import { Dialog } from "./creator/dialog";
import { WebDialog } from "./creator/web.dialog";
import { WindowsDialog } from "./creator/windows.dialog";

function clientCode(creator: Dialog) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.onClick());
}

console.log('App: Launched with the WindowsDialog.');
clientCode(new WindowsDialog());
console.log('');

console.log('App: Launched with the WebDialog.');
clientCode(new WebDialog());