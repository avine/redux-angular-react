import React from 'react';

import { UiTodoList } from '../../../components/ui';

const noop = () => {};

export const ReduxTodoList = () =>
  <UiTodoList
    todos={[]}
    editText={noop}
    remove={noop}
    toggleDone={noop} />;
