import React from "react";

function Comment() {
    return (

        <div className="card">
            <div className="card-header">
                <div className="form-group">
                    <label for="comment">Comment:</label>
                    <textarea className="form-control" rows="1" id="comment"></textarea>
                </div>

                    <button className="btn btn-success btn-sm float-right comment-button" id="buddy-button">
                        Comment
                </button>
            </div>
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                 </div>
        </div>

    )
}

export default Comment;