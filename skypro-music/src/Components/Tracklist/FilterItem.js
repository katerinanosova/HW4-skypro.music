import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as S from './Filter.styled';
import { setFilter } from '../../store/audioplayer/actions';


export default function FilterItemComponent ({ tracks, filterName, filterItem}) {

    const dispatch = useDispatch();
    const [ isFilter, setIsFilter] = useState(false);

    const toggleFilter = ({ item, name }) => {
        console.log(isFilter); 
        setIsFilter(!isFilter);
        console.log(isFilter);
        dispatch(setFilter({ item, name, tracks }))
    }


    return (
        <S.FilterItem onClick={() => toggleFilter({ item: filterItem, name: filterName, tracks })} $isFilter={isFilter}>{filterItem}</S.FilterItem>
    )
}