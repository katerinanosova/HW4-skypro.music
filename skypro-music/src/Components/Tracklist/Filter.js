/* eslint-disable react/no-array-index-key */
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './Filter.styled';
import FilterItemComponent from './FilterItem';


export default function Filter ({ type, filterOptions, filterName, tracks, isActive, onShow, onHide }) {


    const filterCriteria = useSelector((store) => store.audioplayer.FilterCriteria)


    const count = filterCriteria[filterName]?.length




    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div>
        
        <S.FilterButton $isActive={isActive} className='_btn-text' onClick={isActive ? onHide : onShow} type='button'>
            
            {filterName !== 'release_date' && count > 0 && (
                <S.FilterCount>{count}</S.FilterCount>
            )}
            
            {type}
            {isActive ? 
            <S.FilterOption>
                {filterOptions.map((filterItem) =>
                (
                <FilterItemComponent key={filterItem} $isFilter={filterCriteria[filterName]?.includes(filterItem)} filterItem={filterItem} tracks={tracks} filterName={filterName}/>
                )
                )
                }
            </S.FilterOption> 
            : ''}
        </S.FilterButton>
        </div>
        )  
}


