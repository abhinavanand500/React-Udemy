import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Abhinav"
                    timeAgo="Today at 5:00 PM"
                    content="Nice"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Anurag"
                    timeAgo="Yesterday at 9:00 PM"
                    content="Good Content"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Ram"
                    timeAgo="Today at 12:00 PM"
                    content="Mast"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Ayush"
                    timeAgo="Today at 3:00 PM"
                    content="Good"
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
