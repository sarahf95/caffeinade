import React, { Component } from 'react';
import apiKey from './apikey';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return <Map google={this.props.google} zoom={14} />;
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer);
