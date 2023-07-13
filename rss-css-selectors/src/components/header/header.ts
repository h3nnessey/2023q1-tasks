import './style.css';
import { classNames } from './class-names';
import { BaseComponent } from '../base-component/base-component';

export class Header extends BaseComponent {
  private readonly title: BaseComponent;

  constructor() {
    super({ tagName: 'header', classNames: [classNames.header] });

    this.title = new BaseComponent({
      tagName: 'h1',
      classNames: [classNames.title],
      text: 'Cards Selector Game',
      parent: this,
    });
  }
}
