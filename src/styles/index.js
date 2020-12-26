import styled, { css } from 'styled-components';
import { Link as LinkRouter } from "react-router-dom"

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export const Search = styled.div`
  display: flex;
  border-bottom: 3px solid #ccc;
  padding: 30px 0;
  width: 100%;
  & form {
    width: 100%;
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  outline: none;
  margin-right: 50px;
  font-size: 18px;
  width: 50%;
`

export const Button = styled.button`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 8px;
  outline: none;
  margin-right: 50px;
  font-size: 18px;
  ${props => props.primary && css`
    background: #00cdff;
    color: #fff;
  `}
  ${props => props.secondary && css`
    background: #3c4f5e;
    color: #fff;
  `}
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px 20px;
  border-radius: 8px;
  outline: none;
  margin: 0 30px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  ${props => props.primary && css`
    background: #00cdff;
    color: #fff;
  `}
  ${props => props.secondary && css`
    background: #3c4f5e;
    color: #fff;
  `}
`

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  font-size: 18px;
`

export const Td = styled.td`
  border-bottom: 1px solid #333;
  padding: 15px 5px;
  width: 45%;
`

export const Th = styled.th`
  border-bottom: 2px solid #333;
  border-top: 2px solid #333;
  padding: 10px 0;
  width: 45%;
`