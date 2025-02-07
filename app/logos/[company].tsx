import { ImageResponse } from 'next/server'
 
export const runtime = 'edge'
 
export async function GET(
  request: Request,
  { params }: { params: { company: string } }
) {
  const { company } = params
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {company.charAt(0).toUpperCase()}
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}

