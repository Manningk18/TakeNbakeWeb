import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1240,
        padding: `1rem 1rem`,
      }}
    >
      <Title style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </div>
  </Container>
    
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Container = styled.div`
background-image: linear-gradient( 
  180deg
   ,#0570d6 55%,#0b63b7);
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
