import { TweenMax, Expo } from 'gsap'

export default (
  element: Element | Element[],
  value: string,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      backgroundColor: value,
      ease: Expo[`ease${easing}`]
    })
  })
}
