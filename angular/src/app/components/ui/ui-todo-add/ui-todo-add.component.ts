import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-add',
  template: `
    <div>
      <button
        class="filter"
        [class.filter--disabled]="!filterEnabled"
        (click)="emitFilterEnabled()">
        <fa-icon icon="filter"></fa-icon>
      </button>

      <input
        class="text"
        placeholder="What needs to be done?"
        type="text"
        [value]="text"
        (input)="emitText($event.target.value)"
        (keydown.enter)="emitAdd()">

      <button
        class="add"
        [disabled]="addDisabled"
        (click)="emitAdd()">
        <fa-icon icon="plus"></fa-icon>
      </button>
    </div>
  `,
  styleUrls: ['./ui-todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoAddComponent {
  @Input() filterEnabled = false;
  @Output() filterEnabledChange = new EventEmitter<boolean>();

  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  @Input() addDisabled = false;

  @Output() add = new EventEmitter<string>();

  emitFilterEnabled() {
    this.filterEnabledChange.emit(!this.filterEnabled);
  }

  emitText(text: string) {
    this.textChange.emit(text);
  }

  emitAdd() {
    if (!this.addDisabled) {
      this.add.emit(this.text);
      this.emitText('');
    }
  }
}
