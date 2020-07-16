import React from 'react';
import './notification-box.styles.css';

class NotificationBox extends React.Component {

    constructor() {
        super();
        this.state = {
            yPosition: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    render() {
        return (
            <div className='notification-box'  >

            </div>
        )
    }
}

export default NotificationBox;
