import { render } from '@testing-library/react';
import Slider from './Slider';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
});

// External library code shouldn't be tested. It is mocked
jest.mock('./Slider', () => () => (<div>Mock external library</div>));

describe("Slider component",() => {
  it("renders correctly", () => {
    const component = render(<Slider/>);
    expect(component).toMatchSnapshot();
  });
});