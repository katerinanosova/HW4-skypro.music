import * as S from './Filter.styled';

export default function Filter ({ type, filterName, isActive, onShow, onHide }) {
    
    const filterList = filterName.map((item, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <S.FilterItem key={index}>{item}</S.FilterItem>)

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <S.FilterButton $isActive={isActive} className='_btn-text' onClick={isActive ? onHide : onShow} type='button'>
            {type}
            {isActive ? <S.FilterOption>
            {filterList}
            </S.FilterOption> : ''}
        </S.FilterButton>)  
}

  /* className={isActive ? "filter__button filter__button_active button-author" : "filter__button button-author _btn-text"} */

//   .filter__button_active {
//     color: #9A48F1;
//     border: 1px solid #9A48F1;
//   }