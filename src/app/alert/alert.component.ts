import { Component, Input } from "@angular/core";
import { AlertStatesEnum } from "src/enums/alert-states-enum";

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})
export class AlertComponent {
    alertStatesEnum = AlertStatesEnum;
    @Input() alertState: AlertStatesEnum = AlertStatesEnum.Default;
    message: string;
    
    constructor() {
    }

    ngOnInit (){
        this.message = this.alertState === AlertStatesEnum.Success ? 'What a wonderful world!'
        : this.alertState === AlertStatesEnum.Error ? 'What a miserable world!'
        : 'Hello, world!';
    }

}