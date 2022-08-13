import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PlayerEvaluation from './PlayerEvaluation';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
});

// External library code shouldn't be tested. It is mocked
jest.mock('../../components/Slider/Slider', () => () => (<div>Mock external library</div>));

describe("PlayerEvaluation component",() => {
  it("renders correctly", () => {
    const component = render(
      <MemoryRouter initialEntries={["/playerevaluation"]}>
        <PlayerEvaluation/>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});