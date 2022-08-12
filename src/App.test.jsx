import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe("App component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/"]}>
        <App/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
