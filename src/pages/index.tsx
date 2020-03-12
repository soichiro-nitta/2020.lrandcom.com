import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { StateTypes } from '~/store'
import { setName } from '~/store/user'

type ContainerProps = {}
type Props = {
  flag: boolean
  className: string
  handleClick: () => void
} & ContainerProps

const Component: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      test
      <button className="btn" onClick={props.handleClick}>
        {props.flag ? 'click me' : 'CLICK ME'}
      </button>
    </div>
  )
}

const StyledComponent = styled(Component)`
  color: blue;
  .btn {
    color: yellow;
  }
  > button {
    color: blue;
  }
`
const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setName('aaa'))
  const name = useSelector((state: StateTypes) => state.user.name)

  const [flag, setFlag] = React.useState(false)
  const handleClick = React.useCallback(() => {
    setFlag(!flag)
  }, [flag])
  return (
    <StyledComponent
      {...props}
      flag={flag}
      className="test"
      handleClick={handleClick}
    />
  )
}

export default Container
