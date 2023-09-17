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
