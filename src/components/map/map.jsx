import React, {PureComponent} from "react";
import leaflet from "leaflet";
import {PropTypes} from "prop-types";
import {CityCoordinates} from "../../constants";

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {city} = this.props;
    const cityCoordinates = CityCoordinates[city];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(cityCoordinates, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/ributions">CARTO</a>`})
      .addTo(map);
    const {pinLocations} = this.props;
    pinLocations.map((pinLocation) => {
      leaflet.marker(pinLocation, {icon}).addTo(map);
    });
  }

  render() {
    const {mapClass} = this.props;
    return (
      <section id="map" className={`${mapClass} map`}></section>
    );
  }
}

MapComponent.propTypes = {
  mapClass: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  pinLocations: PropTypes.array.isRequired,
};

export default MapComponent;
