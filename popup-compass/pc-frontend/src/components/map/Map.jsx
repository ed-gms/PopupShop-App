import React from "react";
import { compose, withProps, withState, withHandlers } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }
    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
      onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  
  <GoogleMap
    defaultCenter={
      { lat: props.coordinates.latitude,
        lng: props.coordinates.longitude }
      }
      ref={props.onMapMounted}
      onZoomChanged={props.onZoomChanged}
      defaultZoom={15}
      >
    <Marker
      position={
        { lat: props.coordinates.latitude,
          lng: props.coordinates.longitude }
        }
      >
    </Marker>
  </GoogleMap>
));

export default (Map);