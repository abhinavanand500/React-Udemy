import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
class GoogleAuth extends React.Component {
    // state = { isSignedIn: null }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '426963657515-25d81358i50mlihk11b9rai7na4o7177.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div className="ui active inline loader"></div>
            )
        }
        else if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon' />Sign Out</button >
            );
        }
        else {
            return (
                <button className='ui red google button' onClick={this.onSignInClick}>
                    <i className='google icon' />Sign In with Google
                </button>
            );
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const MapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(MapStateToProps, { signIn, signOut })(GoogleAuth);