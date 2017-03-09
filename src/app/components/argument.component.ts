import { Component, Input } from '@angular/core';

import { Argument } from 'app/models/flow'

@Component({
  selector: 'app-argument',
  template: `
    <md-card class="argument" [ngClass]="{'argument-selected':  selected}">
      {{ argument.contents }}
    </md-card>
  `,

  styles: [`
    :host {
      box-sizing: border-box;
    }
    .argument {
      width: 12em;
      padding: 0.5em;
      font-size: small;
    }

    .argument-selected {
      border: solid 0.2em;
      border-color: lightblue;
    }
  `]
})
export class ArgumentComponent {
  @Input() argument: Argument;
  @Input() selected: boolean;
}
