import React, { useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'

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
    <div className="relative rounded-lg">
      <div
        id="map"
        className="w-full h-60 tablet:h-[338px] desktop:h-[450px] rounded-lg"
      />
      <a
        href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,477625,1107130&rt1=&rt2=%EC%82%AC%EB%9E%8C%EC%9D%B8&rtIds=,14521432"
        target="_blank"
        className="flex items-center gap-1 text-white bg-gray-800 rounded-lg absolute text-mobile-sub-h2 bottom-4 right-4 z-10 p-2 pr-3"
      >
        <LocationOnIcon />
        사람인 본사 14층
      </a>
    </div>
  )
}

export default KakaoMap
