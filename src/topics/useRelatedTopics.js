import { gql, useQuery } from '@apollo/client';

export const GET_RELATED_TOPICS = gql`
    query GetRelatedTopics($topic: String!) {
        topic(name: $topic) {
            relatedTopics(first: 10) {
                id
                name
                stargazerCount
            }
        }
    }
`;

export const useRelatedTopics = topic => {
    const { loading, error, data } = useQuery(GET_RELATED_TOPICS, {
        variables: { topic }
    });

    return {
        loading,
        error,
        topics: data ? data.topic.relatedTopics : [],
    };
}