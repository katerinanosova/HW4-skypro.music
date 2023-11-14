/* eslint-disable react/no-array-index-key */
import { useDispatch } from 'react-redux';
import * as S from './Filter.styled';
import { setFilter } from '../../store/audioplayer/actions';

export default function Filter ({ type, filterOptions, filterName, tracks, isActive, onShow, onHide }) {

    const dispatch = useDispatch();
    

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <S.FilterButton $isActive={isActive} className='_btn-text' onClick={isActive ? onHide : onShow} type='button'>
            {type}
            {isActive ? 
            <S.FilterOption>
                {filterOptions.map((item, index) =>
                <S.FilterItem key={index} onClick={() => {dispatch(setFilter({ item, name: filterName, tracks }))}}>{item}</S.FilterItem>)}
            </S.FilterOption> 
            : ''}
        </S.FilterButton>)  
}
