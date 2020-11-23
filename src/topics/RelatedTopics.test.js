import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { RelatedTopics } from './RelatedTopics';

test('returns a loading spinner while graphql query is loading', () => {
    const testJsx = (
        <MockedProvider mocks={[]}>
            <RelatedTopics />
        </MockedProvider>
    );
    render(testJsx);
    const linkElement = screen.getByTestId('related-topics-loading');
    expect(linkElement).toBeInTheDocument();
});
