type TOffer = {
  adults: number
  bedrooms: number
  city: string
  host: object
  id: number
  image: string[]
  inside: string[]
  isInBookmarks: boolean
  isPremium: boolean
  location: number[]
  name: string
  price: {
    period: string
    value: number
  }
  rating: number
  type: string
  previewImage: string
};

export {TOffer};
