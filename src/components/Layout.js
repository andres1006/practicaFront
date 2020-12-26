import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const { REACT_APP_OSCANN_FRONTEND } = process.env;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "sidebar header"
                       "sidebar content";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
`
const Header = styled.header`
  grid-area: header;
  grid-row: auto;
  background: #3C4F5E;
  color: #fff;
`
const SideBar = styled.nav`
  grid-area: sidebar;
  height: 100%;
  min-height: 100vh;
  background: #3C4F5E;
  color: #fff;
  text-align: center;
`
const Content = styled.section`
  grid-area: content;
  display: block;
  padding: 20px 50px;
`
const Logo = styled.img`
  max-width: 180px;
  margin: 20px 0;
`
const Menu = styled.ul`
  margin: 0;
  padding: 0;
`
const MenuItem = styled.li`
  text-align: left;
  margin: 0;
  padding: 10px 50px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`
const TitleMenu = styled.h1`

  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
`
const cerrarSesion = () => {
  window.sessionStorage.clear();
  window.location.href = `${REACT_APP_OSCANN_FRONTEND}/`;
}

export const Layout = ({ children }) => (
  <>
    <Wrapper>
      <Header>
        <div>
          <h1>Bienvenido: {window.sessionStorage.getItem('usuario')}</h1>
          <li onClick={cerrarSesion} className="btn-cerrar-sesion"><a>Cerrar Sesion</a></li>
        </div>
      </Header>
      <SideBar>
        <Logo src="https://externalstorageaccount.blob.core.windows.net/recursos/img/auralogo.png" alt="logo" />
        <Menu>
          <TitleMenu>Menu</TitleMenu>
          <NavLink exact activeClassName='current' to="/reports">
            <MenuItem>
              Reportes
            </MenuItem>
          </NavLink>
          {(() => {
            if(window.sessionStorage.getItem('admin') === 'true'){;
              return (
                <NavLink  activeClassName='current' to='/listlogs'>
                  <MenuItem>
                    Logs
                  </MenuItem>
                </NavLink>
              )
            }
          })()}
        </Menu>
      </SideBar>
      <Content>
        {children}
      </Content>
    </Wrapper>
  </>
)
