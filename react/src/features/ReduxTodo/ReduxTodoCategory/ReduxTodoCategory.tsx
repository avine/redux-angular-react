import React from 'react';

import { UiTodoCategory } from '../../../components/ui';

const noop = () => {};

export const ReduxTodoCategory = () =>
  <UiTodoCategory
    category={'all'}
    select={noop} />;
