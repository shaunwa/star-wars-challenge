import { render, screen } from '@testing-library/react';
import { TopicStargazerCountItem } from './TopicStargazerCountItem';

test('Displays the name and stargazer count for a topic', () => {
    const fakeTopic = { name: 'Hello', stargazerCount: 99 };
    const testJsx = (
        <TopicStargazerCountItem topic={fakeTopic} />
    );
    render(testJsx);
    const nameElement = screen.getByText(/Hello/i);
    const stargazerCountElement = screen.getByText(/99/i);
    expect(nameElement).toBeInTheDocument();
    expect(stargazerCountElement).toBeInTheDocument();
});
