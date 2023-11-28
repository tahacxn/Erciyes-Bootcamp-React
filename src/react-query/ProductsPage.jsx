import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function ProductsPAge() {

    const {isLoading,data,error} = useQuery('products', () => {
        return axios.get('https://northwind.vercel.app/api/products').then(res => res.data)
    },
    // {
    //     refetchInterval: 2000000000
    // }
    )


    return (
   <>
   {
    isLoading ? <h1>loading...</h1> : <ul>
        {
            data.map(item => <li>{item.name}</li>)
        }
    </ul>
   }
   {
    error ? <h1>error...</h1> : null
   }
   </>
  )
}

export default ProductsPAge