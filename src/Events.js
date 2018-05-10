import React, { Component } from 'react';
import './css/events.css';
import carnival from './img/carnival.png';
import cherryblossom from './img/cherryblossom.png';

class Events extends Component {
    render() {
        return (
            <div>
                <div className="events-header" />
                <h2 className="events-title"> Upcoming Events</h2>
                <div className="events">
                    <ul>
                        <li>
                            <img
                                className="icon"
                                src={cherryblossom}
                                alt="balloon"
                            />
                            <div className="content-wrapper">
                                <div className="event-name">Weekly Tabling</div>
                                <div className="date">
                                    May 17th | 11:00 - 2:00
                                </div>
                                <div className="loc">UW Quad </div>
                            </div>
                        </li>
                        <li>
                            <img
                                className="icon"
                                src={carnival}
                                alt="balloon"
                            />
                            <div className="content-wrapper">
                                <div className="event-name">
                                    Junior Panhellenic Carnival
                                </div>
                                <div className="date">
                                    May 18th | 2:00 - 4:00
                                </div>
                                <div className="loc">Red Square </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Events;
