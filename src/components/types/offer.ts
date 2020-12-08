export type TOffer = {
  id: number
  adults: number
  bedrooms: number
  city: string
  host: {
    avatar: string
    description: string
    name: string
    pro: boolean
  }
  image: string[]
  inside: string[]
  isInBookmarks: boolean
  isPremium: boolean
  location: [number, number]
  name: string
  price: {
    period: string
    value: number
  }
  rating: number
  type: string
  previewImage: string
  cityLocation: [number, number]
  cityZoom: number
};
