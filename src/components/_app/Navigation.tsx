import React, { useEffect } from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { useDispatch, useSelector } from 'react-redux'
import { StateTypes } from '~/store'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner">Nav</div>
  </div>
)

const StyledComponent = styled(Component)`
  /* display: none;
  height: 0; */
  overflow: hidden;
  .inner {
    ${styles.mixins.flexCenter}
    width: 100%;
    height: 100%;
    background: black;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const navigation = useSelector((state: StateTypes) => state.navigation)
  useEffect(() => {
    if (humberger && !navigation.opened) {
      console.log('op')
    } else if (!humberger && navigation.opened) {
      console.log('ed')
    }
  }, [dispatch, humberger, navigation.opened])
  return <StyledComponent {...props} />
}

export default Container
