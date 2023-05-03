import React, { useEffect } from 'react'

interface KakaoMapProps {
  latitude: number
  longitude: number
}

const KakaoMap = ({ latitude, longitude }: KakaoMapProps) => {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        }
        const map = new window.kakao.maps.Map(container, options)
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
      })
    }
    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [latitude, longitude])

  return (
    <div
      id="map"
      className="w-full h-60 tablet:h-[338px] desktop:h-[450px] rounded-lg"
    />
  )
}

export default KakaoMap
