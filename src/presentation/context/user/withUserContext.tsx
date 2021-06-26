/* eslint-disable react/display-name */
import React from "react";

import { Provider } from "./Provider";

const withUserContext =
  <T extends unknown>(WrappedComponent: any) =>
  (props: T) =>
    (
      <Provider>
        <WrappedComponent {...props} />
      </Provider>
    );

export { withUserContext as default, withUserContext };
