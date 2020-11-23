import { useState } from 'react';
import { TopicsList } from './TopicsList';
import { TopicStargazerCountItem } from './TopicStargazerCountItem';
import { useRelatedTopics } from './useRelatedTopics';
import { CircularProgress } from '../ui';

const initialTopic = 'react';

export const RelatedTopics = () => {
    const [currentTopicName, setCurrentTopicName] = useState(initialTopic);
    const { loading, error, topics } = useRelatedTopics(currentTopicName);

    if (loading) {
        return <CircularProgress data-testid="related-topics-loading" />
    }
    
    if (error) {
        return <p data-testid="related-topics-error-message">An error occurred while loading the data!</p>;
    }
    
    return (
        <>
        <p>Topics related to "{currentTopicName}"</p>
        <TopicsList
            topics={topics}
            onClickItem={topic => setCurrentTopicName(topic.name)}
            itemComponent={TopicStargazerCountItem} />
        </>
    );
}