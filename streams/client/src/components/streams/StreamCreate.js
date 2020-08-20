import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {

    renderInput(formprops) {
        return <input {...formprops.input} />
    }

    render() {
        return (
            <div>
                <form>
                    <Field name='Title' component={this.renderInput} />
                    <Field name='Description' component={this.renderInput} />
                </form>
            </div >
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);