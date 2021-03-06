const adaptDataToOffers = (data) => (
  data.map((it) => {
    return ({
      id: it.id,
      city: it.city.name,
      cityLocation: [it.city.location.latitude, it.city.location.longitude],
      cityZoom: it.city.location.zoom,
      image: it.images,
      previewImage: it.preview_image,
      isPremium: it.is_premium,
      isInBookmarks: it.is_favorite,
      name: it.title,
      type: it.type,
      bedrooms: it.bedrooms,
      adults: it.max_adults,
      rating: it.rating,
      price: {
        value: it.price,
        period: `night`,
      },
      inside: it.goods,
      host: {
        id: it.host.id,
        avatar: it.host.avatar_url,
        name: it.host.name,
        pro: it.host.is_pro,
        description: it.description,
      },
      location: [it.location.latitude, it.location.longitude],
      zoom: it.location.zoom,
    });
  }));

export {adaptDataToOffers};
