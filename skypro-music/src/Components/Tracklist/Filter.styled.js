import { styled } from 'styled-components';


export const FilterItem = styled.option`
&:hover {
    color: #B672FF;
    text-decoration: underline;
  }
`

export const FilterOption = styled.div`
width: 248px;
background-color: #313131;
color: #ffffff;
border-radius: 12px;
box-sizing: border-box;
padding: 34px;
display: flex;
flex-direction: column;
gap: 24px;
align-items: flex-start;
position: relative;
left: -20px;
bottom: -10px;
font-size: 20px;
line-height: 24px;
`

export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: ${({ $isActive }) => ($isActive ? '1px solid #9A48F1' : '1px solid #ffffff')};
border-radius: 60px;
padding: 6px 20px;
text-align: center;
color: ${({ $isActive }) => ($isActive ? '#9A48F1' : '#ffffff')};
appearance: none;
width: 144px;
height: 39px;
background-color: #181818;
&:not(:last-child) {
    margin-right: 10px;
  }
&:hover {
  border: ${({ $isActive }) => ($isActive ? '1px solid #9A48F1' : '')};
  color: ${({ $isActive }) => ($isActive ? '#9A48F1' : '')};
}
`
