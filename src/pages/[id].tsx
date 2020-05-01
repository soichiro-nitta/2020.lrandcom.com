import React from 'react'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>Component</div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  context.res.writeHead(302, { Location: `/articles/${context.params?.id}` })
  context.res.end()
  return {
    props: {}
  }
}

export default Container
