import React from 'react';

import { UiTodoAdd } from '../../../components/ui';

const noop = () => {};

export const ReduxTodoAdd = () =>
  <UiTodoAdd
    add={noop}
    addDisabled={true}
    filterEnabled={false}
    filterEnabledChange={noop}
    text={''}
    textChange={noop} />;
