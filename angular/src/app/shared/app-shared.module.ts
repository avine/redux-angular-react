import { UiTodoAddComponent } from 'App/components/ui/ui-todo-add/ui-todo-add.component';
import { UiTodoCategoryComponent } from 'App/components/ui/ui-todo-category/ui-todo-category.component';
import { UiTodoListComponent } from 'App/components/ui/ui-todo-list/ui-todo-list.component';
import { UiTodoMessageComponent } from 'App/components/ui/ui-todo-message/ui-todo-message.component';
import { UiTodoStatusComponent } from 'App/components/ui/ui-todo-status/ui-todo-status.component';
import { ContentEditableDirective } from 'App/directives/content-editable.directive';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFontAwesomeModule } from './app-font-awesome.module';

const components = [
  UiTodoAddComponent,
  UiTodoMessageComponent,
  UiTodoListComponent,
  UiTodoStatusComponent,
  UiTodoCategoryComponent,
];

const directives = [
  ContentEditableDirective
];

@NgModule({
  declarations: [
    components,
    directives,
  ],
  imports: [
    CommonModule,
    AppFontAwesomeModule,
  ],
  exports: [
    components,
    directives,
    AppFontAwesomeModule
  ]
})
export class AppSharedModule { }
