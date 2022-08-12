import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SignUp from './SignUp';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
});

describe("SignUp component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignUp/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});