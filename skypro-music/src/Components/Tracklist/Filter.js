import { styled } from 'styled-components';


const StyledFilterItem = styled.option`
&:hover {
    color: #B672FF;
    text-decoration: underline;
  }
`

const StyledFilterOption = styled.div`
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

const StyledFilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
text-align: center;
color: ${({ $isActive }) => ($isActive ? '#9A48F1' : '#ffffff')}
appearance: none;
width: 144px;
height: 39px;
background-color: #181818;
&:not(:last-child) {
    margin-right: 10px;
  }
`



// const Styled = styled.div``

export default function Filter ({ type, filterName, isActive, onShow, onHide }) {
    
    const filterList = filterName.map((item, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <StyledFilterItem key={index}>{item}</StyledFilterItem>)

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <StyledFilterButton $isActive={isActive} className='_btn-text' onClick={isActive ? onHide : onShow} type='button'>
            {type}
            {isActive ? <StyledFilterOption>
            {filterList}
            </StyledFilterOption> : ''}
        </StyledFilterButton>)  
}

  /* className={isActive ? "filter__button filter__button_active button-author" : "filter__button button-author _btn-text"} */

//   .filter__button_active {
//     color: #9A48F1;
//     border: 1px solid #9A48F1;
//   }