import Comments from "../components/comments/Comments";
import { createComments } from "../types/mockData";
import { render, screen } from './test-utils';
import userEvent from '@testing-library/user-event';

const comments = createComments();

describe('<Input/>', () => {
  it('Render only first comment', () => {
    render(<Comments comments={comments} />);  
    expect(screen.getByText(comments[0].name)).toBeInTheDocument();
    expect(screen.getByText(comments[0].body)).toBeInTheDocument();
    expect(screen.queryByText(comments[1].name)).not.toBeInTheDocument();
    expect(screen.queryByText(comments[1].body)).not.toBeInTheDocument();
  });

  it('Control Show/Hide button label', async () => {
    render(<Comments comments={comments} />);  
    const showButton = screen.getByText(/All/);
    expect(screen.queryByText(/All/)).toBeInTheDocument();
    expect(screen.queryByText(/Hide/)).not.toBeInTheDocument();
    await userEvent.click(showButton);
    expect(screen.queryByText(/All/)).not.toBeInTheDocument();
    expect(screen.getByText(/Hide/)).toBeInTheDocument();
  });

  it('All comments render', async () => {
    render(<Comments comments={comments} />);  
    const showButton = screen.getByText(/All/);
    expect(screen.queryByText(comments[0].body)).toBeInTheDocument()
    expect(screen.queryByText(comments[0].name)).toBeInTheDocument();
    expect(screen.queryByText(comments[1].body)).not.toBeInTheDocument()
    expect(screen.queryByText(comments[1].name)).not.toBeInTheDocument();
    await userEvent.click(showButton);
    expect(screen.queryByText(comments[1].body)).toBeInTheDocument()
    expect(screen.queryByText(comments[1].name)).toBeInTheDocument();
  });
})