
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";


export const AddFedback = ({ good, neutral, bad, options}) => {
    return (
        <div>
            
            <h2>Please leave feedback</h2>
            
            <FeedbackOptions  options={options}  />
            

            <div>
                <h2>Statistics</h2>
                <ul>
                    <li>
                        <span>Good: </span>{good}</li>
                    <li>
                        <span>Neutral: </span>{neutral}</li>
                    <li>
                        <span>Bad: </span>{bad}</li>
                </ul>
            </div>
            
         </div>
    )
};
