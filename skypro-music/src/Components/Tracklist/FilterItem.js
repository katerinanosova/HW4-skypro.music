import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import * as S from './Filter.styled';
import { setFilter } from '../../store/audioplayer/actions';


export default function FilterItemComponent ({ tracks, filterName, filterItem, $isFilter}) {

    const dispatch = useDispatch();
    
    const toggleFilter = ({ item, name }) => {
        dispatch(setFilter({ item, name, tracks }))
    }



    return (
        <S.FilterItem onClick={() => toggleFilter({ item: filterItem, name: filterName })} $isFilter={$isFilter}>{filterItem}</S.FilterItem>
    )
}