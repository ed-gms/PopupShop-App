import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    // return (
    //   <Map google={this.props.google} zoom={14}>

    //     <Marker onClick={this.onMarkerClick}
    //       name={'Current location'} />

    //     <InfoWindow onClose={this.onInfoWindowClose}>
    //       <div>
    //         <h1>{this.state.selectedPlace.name}</h1>
    //       </div>
    //     </InfoWindow>
    //   </Map>
    // );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
  libraries: ['places', 'visualization']
})(MapContainer)