import { useEffect, useState, useCallback } from 'react'
import { Dimensions } from 'react-native'

const screen = Dimensions.get('screen')

export default () => {
  const isOrientationPortrait = ({
    width,
    height,
  }) => height >= width
  const isOrientationLandscape = ({
    width,
    height,
  }) => width >= height

  const [orientation, setOrientation] = useState({
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen),
  })

  const onChange = useCallback(({ screen: scr }) => {
    setOrientation({
      portrait: isOrientationPortrait(scr),
      landscape: isOrientationLandscape(scr),
    })
  }, [])

  useEffect(() => {
    const removeEvent = Dimensions.addEventListener('change', onChange)

    return () => {
      removeEvent()
    }
  }, [orientation.portrait, orientation.landscape, onChange])

  return orientation
}
