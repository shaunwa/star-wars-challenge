/*
    One question you might have about this component is: "why don't you just import the
    TopicStargazerCountItem component into it directly?". As you can see, it takes this component
    as a prop. This is my take on the "Dependency Inversion Principle" (and would be even more effective
    if using Typescript). Basically, the parent component of TopicsList (and not the TopicsList itself) can decide to have it display
    whatever kind of data it wants by passing a different component (i.e. if we wanted to have a section on
    the page that displays how many sponsors each topic has, we'd just create a "TopicSponsorsItem" component and
    pass that instead)
*/
export const TopicsList = ({
    topics,
    onClickItem,
    itemComponent: ItemComponent, // This might look strange - the reason I did this is because it looks
                                  // better to me to have "ItemComponent" capitalized when using it in
                                  // JSX (like <ItemComponent>, see below), but it looks better in lowercase
                                  // when passing it in as a prop (itemComponent={MyComponent} like see App.js)
}) => {
    return (
        <>
            {topics.map(topic => (
                <ItemComponent key={topic.id} topic={topic} onClickItem={() => onClickItem(topic)} />
            ))}
        </>
    );
}