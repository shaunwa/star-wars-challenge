import {
    Box,
    Button,
    Divider,
} from '../ui';

export const TopicStargazerCountItem = ({ topic, onClickItem }) => {
    return (
        <>
        <Box my={2}>
            <h3>{topic.name}</h3>
            <p>Stargazers: {topic.stargazerCount}</p>
            <Button
                onClick={onClickItem}
                variant="contained"
            >View Related</Button>
        </Box>
        <Divider />
        </>
    );
}