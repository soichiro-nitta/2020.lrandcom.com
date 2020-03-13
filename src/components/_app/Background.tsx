import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <canvas className={props.className} ref={props.canvasRef} />
)

const StyledComponent = styled(Component)`
  opacity: 0.3;
`

const Container: React.FC<ContainerProps> = props => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const resize = (): void => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.onresize = resize

    const makeNoise = (context): void => {
      const width = context.canvas.width
      const height = context.canvas.height
      const imgData = context.createImageData(width, height)
      const buffer32 = new Uint32Array(imgData.data.buffer)
      const len = buffer32.length
      let i = 0
      for (i; i < len; ) {
        buffer32[i++] = ((255 * Math.random()) | 0) << 24
      }
      context.putImageData(imgData, 0, 0)
    }

    let toggle = true
    const loop = (): void => {
      // toggle to get 30 FPS instead of 60 FPS
      toggle = !toggle
      if (toggle) {
        requestAnimationFrame(loop)
        return
      }
      makeNoise(context)
      requestAnimationFrame(loop)
    }
    loop()
  }, [])

  return <StyledComponent canvasRef={canvasRef} {...props} />
}

export default Container
