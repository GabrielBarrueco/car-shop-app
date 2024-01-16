   export interface Cars {
    cars: Car[]
  }
  
  export interface Car {
    id: string
    description: string
    name: string
    image: Image[]
    price: number
    category: string
  }
  
  export interface Image {
    url: string
  }
  