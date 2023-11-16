import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as S from './Filter.styled';
import { setFilter } from '../../store/audioplayer/actions';


export default function FilterItemComponent ({ tracks, filterName, FilterItem }) {

    const dispatch = useDispatch();
    const [isFilter, setIsFilter] = useState(false);

    const toggleFilter = ({ item, name }) => {
        setIsFilter(!isFilter);
        dispatch(setFilter({ item, name, tracks }))
    }

    console.log(FilterItem);



    return (
        <S.FilterItem onClick={() => toggleFilter({ item: FilterItem, name: filterName, tracks })} $isFilter={isFilter}>{FilterItem}</S.FilterItem>
    )
}