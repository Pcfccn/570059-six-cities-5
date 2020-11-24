import React, {PureComponent} from "react";
import leaflet from "leaflet";
import {PropTypes} from "prop-types";

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    if (!this.myRef.current) {
      return;
    }
    const {cityLocation, zoom, pinLocations, chosedPinLocation} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const map = leaflet.map(`map`, {
      center: cityLocation,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(cityLocation, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/ributions">CARTO</a>`})
      .addTo(map);

    pinLocations.map((pinLocation) => {
      leaflet.marker(pinLocation, {icon}).addTo(map);
    });
    if (chosedPinLocation && chosedPinLocation.length) {
      leaflet.marker(chosedPinLocation, {activeIcon}).addTo(map);
    }
  }

  render() {
    const {className} = this.props;
    return (
      <section id="map" className={`${className} map`} />
    );
  }
}

MapComponent.defaultProps = {
  chosedPinLocation: [],
};

MapComponent.propTypes = {
  className: PropTypes.string.isRequired,
  cityLocation: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  pinLocations: PropTypes.array.isRequired,
  chosedPinLocation: PropTypes.array.isRequired,
};

export default MapComponent;
