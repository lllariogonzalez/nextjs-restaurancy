import api from '@/api'
import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Restaurancy Details'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 68,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: 'auto'
        }}
      >
        {restaurant.name}
        <img width="700" src={restaurant.image} alt={restaurant.description} />
      </div>
    ),
    {
      ...size,
    }
  )
}