import {Component} from '@stencil/core';
import morph from 'morphdom';

@Component({
  tag: 'app-demo'
})
export class Demo {
  containerEl: any;

  doMorph(id: number) {
    const dom = [
      /* html */
      `<div>
        <app-test></app-test>
      </div>`,
      /* html */
      `<div>
        <ul>
          <li>
            <app-test></app-test>
          </li>
        </ul>
      </div>`,
      /* html */
      `<div>
        Nothing to see here
      </div>`
    ];
    morph(this.containerEl, dom[id], {
      childrenOnly: true
    });
  }

  render() {
    return [
    <button onClick={() => this.doMorph(0)}>Dom 1</button>,
    <button onClick={() => this.doMorph(1)}>Dom 2</button>,
    <button onClick={() => this.doMorph(2)}>Dom 3</button>,
    <div ref={el => this.containerEl = el}>

    </div>
    ]
  }
}
