import React, { Component } from 'react';
import './css/events.css';
import carnival from './img/carnival.png';
import streetfair from './img/streetfair.png';

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
                                src={carnival}
                                alt="balloon"
                            />
                            <div className="content-wrapper">
                                <div className="event-name">
                                    Junior Panhellenic Spring Carnival
                                </div>
                                <div className="date">
                                    May 18th | 2:00 - 4:00
                                </div>
                                <div className="loc">Red Square </div>
                            </div>
                        </li>
                        <li>
                            <img
                                className="icon street-fair"
                                src={streetfair}
                                alt="balloon"
                            />
                            <div className="content-wrapper">
                                <div className="event-name">
                                    University District Street Fair
                                </div>
                                <div className="date">
                                    May 19th | 10:00am - 7:00pm
                                </div>
                                <div className="loc">The Ave</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Events;
