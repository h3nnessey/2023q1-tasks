import { Component } from '../component';

export class Button extends Component {
  private button: HTMLButtonElement;

  constructor({
    parent,
    text,
    disabled,
    onClick,
  }: {
    parent: Component;
    text?: string;
    disabled?: boolean;
    onClick?: () => void;
  }) {
    super({ tagName: 'button', parent, text });

    this.button = this.node as HTMLButtonElement;

    if (disabled) this.off();

    if (onClick) this.addEventListener('click', onClick);
  }

  public on(): void {
    this.button.disabled = false;
  }

  public off(): void {
    this.button.disabled = true;
  }
}
