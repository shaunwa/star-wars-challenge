import { render, screen } from '@testing-library/react';
import { TopicsList } from './TopicsList';

test('renders a specified component for each topic passed in', () => {
    const FakeComponent = ({ topic }) => <p>{topic.name}</p>;
    const fakeTopics = Array(5).fill(null).map(_ => ({ id: Math.random(), name: 'Some topic' }))
    const testJsx = (
        <TopicsList
            topics={fakeTopics}
            itemComponent={FakeComponent}
        />
    );
    render(testJsx);
    const linkElements = screen.getAllByText(/Some topic/i);
    expect(linkElements).toHaveLength(5);
});
