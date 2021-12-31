import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: rgb(20, 20, 20);
  height: 3rem;
  color: snow;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const NavBar = styled.nav`
  width: 80%;
  margin: 0 auto;

  user-select: none;
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const UlStyled = styled.ul`
  list-style: none;
`;

const ALink = styled.a`
  text-decoration: none;
  color: snow;
  font-size: 1.5rem;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    font-size: 1.75rem;
    color: orange;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <NavBar>
        <div>Text Converter</div>
        <UlStyled>
          <li>
            <ALink
              target="_blank"
              href="https://www.facebook.com/poorneshhn.poorneshhn/"
            >
              Contact me?
            </ALink>
          </li>
        </UlStyled>
      </NavBar>
    </HeaderStyle>
  );
}

export default Header;
