

export const FeedbackOptions = ({ options: { onOptionGood, onOptionNeutral, onOptionBad } }) => {
    

    return (
        <div>
            <button onClick={onOptionGood}>Good</button>   
            <button onClick={onOptionNeutral}>Neutral</button>
            <button onClick={onOptionBad}>Bad</button>
        </div>
    )
    
}