import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task}) => {
    return ( 
        <li className="task shadow">
            <p>{ task.name }</p>
            <div className="status">
                {task.status 
                ?
                    (
                        <button 
                            type="button" 
                            className="complete"
                        >Complete</button>
                    )
                :
                    (
                        <button 
                            type="button" 
                            className="incomplete"
                        >Incomplete</button>
                    )
                }
            </div>

            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                >
                Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                >
                Delete
                </button>
            </div>
        </li>
    );
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}
 
export default Task;