import Input from "../components/input/Input";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Input/>', () => {
  it('Renders Placeholder', () => {
    const { container } = render(<Input value="Sea" placeholder="Search" onChange={() => null} />);  
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
  it('Handles Typing Update', async () => {
    const { container } = render(<Input placeholder="Search" />);  
    const text = "Caner";
    const input = screen.getByTestId("input");

    await userEvent.type(
      input,
      text
    );

    expect(input.value).toBe(text);
  });
  it('How Many Times Function Called', async () => {
    const typing = jest.fn();
    const { container } = render(<Input placeholder="Search" onChange={typing} />);  
    const input = screen.getByTestId("input");
    await userEvent.type(
      input,
      'a'
    );
    expect(typing.mock.calls.length).toBe(1);
  })
})