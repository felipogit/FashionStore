import styled from "styled-components"
import { letterMenu } from "../../../styles/globalStyle"

export const StyledNavAdminBar = styled.nav`
  width: 100%;
  min-height: 3rem;
  max-width: 1440px;

  display: flex;
  padding: 0 35px;
  margin: 1.25rem;

  > ul {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;

    li { 
      height: auto;
    }

    li > a {
      text-decoration: none;
      font:${letterMenu};

      cursor: pointer;

      margin-right: 1.8rem;

      &:visited {
        color:#000000; 
      }
    }
  }

  @media(max-width: 400px){
    margin: 1rem 0 4rem 0;
    ul {
      li {
        width: 220px;
        a{
          margin: 0;
        }
      }
    }
  }
`