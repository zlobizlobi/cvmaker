import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`

export const NavList = styled.ul`
  display: flex;
`

export const NavLink = styled(Link)`
  color: black;
  font-weight: 400;
  padding: 20px;
  text-decoration: none;
`
