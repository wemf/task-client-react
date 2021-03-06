import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';

const NewProject = () => {
    // Get state from the form
    const projectContext = useContext(ProjectContext);
    const { form, formError, toggleForm, addProject, showError } = projectContext;

    // Project local state
    const [project, setProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();

        // validate
        if(name === '') {
            showError();
            return;
        }
        // add to state
        addProject(project);
        // reset form
        setProject({ name: '' });
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={() => toggleForm()}
            >
            New project
            </button>
            {
                form ? 
                (
                    <form className="form-new-project" onSubmit={onSubmitProject}>
                        <input 
                            type="text" 
                            className="input-text"
                            name="name" 
                            placeholder="Project name"
                            autoComplete="off"
                            value={name}
                            onChange={onChangeProject}
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"
                            >
                        Add project
                        </button>
                    </form>
                ) :
                    null
            }    
            { formError ? <p className="error message">Name is required</p> : null}
        </Fragment>
    );
}
 
export default NewProject;