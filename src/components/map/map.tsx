import React, {PureComponent} from "react";
import leaflet from "leaflet";

type TMapComponentProps = {
  className: string
  cityLocation: [number, number]
  zoom: number
  pinLocations: Array<[number, number]>
  chosedPinLocation: [number, number]
}

class MapComponent extends PureComponent<TMapComponentProps> {
  constructor(props: TMapComponentProps) {
    super(props);
  }

  componentDidMount() {
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
    });
    map.setView(cityLocation, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/ributions">CARTO</a>`})
      .addTo(map);

    pinLocations.map((pinLocation) => {
      leaflet.marker(pinLocation, {icon}).addTo(map);
    });
    if (chosedPinLocation && chosedPinLocation.length) {
      leaflet.marker(chosedPinLocation).setIcon(activeIcon).addTo(map);
    }
  }

  render() {
    const {className} = this.props;
    return (
      <section id="map" className={`${className} map`} />
    );
  }
}

export default MapComponent;
