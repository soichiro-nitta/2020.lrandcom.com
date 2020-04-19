import GlobalStyle from './global'
import mixins from './mixins'

const breakpoint = 767
const sp = `@media (max-width: ${breakpoint}px)`

export const styles = { mixins, breakpoint, sp }

export { GlobalStyle }
