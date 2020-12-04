export type TOffer = {
  id: number
  adults: number
  bedrooms: number
  city: string
  host: object
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
