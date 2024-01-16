import request, { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { Car, Cars } from './api.interface';

const BASE_URL= 'https://api-sa-east-1.hygraph.com/v2/clre9j8pm2kst01w7pn6sjtat/master';

export const getCarsList = async (): Promise<Car[]> => {
  const lisAllCarsQuery = gql`
    query Cars {
    cars {
      id,
      car_id,
      description,
      name,
      image {
        id,
        url
      },
      price, 
      category
    }
    }
  `

  const result = await request(BASE_URL, lisAllCarsQuery)
  return result.cars;
}

// async function carsQuery() {
//   console.log("AQUI 2")
//   const { data, error, isLoading, isSuccess } = useQuery({
//     queryKey: ['Cars'],
//     queryFn: async () =>
//       await request(
//         BASE_URL,
//         lisAllCars,
//       ),
//   });
//   if(error){
//     console.log("--->", error)
//   }
//   if(!isLoading){
//     console.log("--->", data, error, isLoading)
//   }
// }

// export default carsQuery