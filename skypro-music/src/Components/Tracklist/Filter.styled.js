import { styled } from 'styled-components';


export const FilterItem = styled.option`
color: ${({ $isFilter }) => ($isFilter ? '#B672FF' : '#ffffff')};
&:hover {
    color: #B672FF;
    text-decoration: underline;
  }
`

export const FilterOption = styled.div`
width: 275px;
max-height: 275px;
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
overflow-y: auto;
overflow-x: hidden;


&::-webkit-scrollbar {
  width: 5px;
}
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
position: relative;
margin-right: 10px;
&:not(:last-child) {
    margin-right: 10px;
  }
&:hover {
  border: ${({ $isActive }) => ($isActive ? '1px solid #9A48F1' : '1px solid #d9b6ff')};
  color: ${({ $isActive }) => ($isActive ? '#9A48F1' : '#d9b6ff')};
  cursor: pointer;
}
&:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}
`

export const FilterCount = styled.div`
  background-color: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 100% */
`;
