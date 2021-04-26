import React, { useState, useEffect } from 'react'
import Switch from '@material-ui/core/Switch';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import "./Header.scss"
import $ from "jquery"
import {useSelector, useDispatch} from "react-redux"
import {changeTerm} from "../../actions/Term"
import {movieInterface} from "../../interface/movieInterface"
import {tvInterface} from "../../interface/tvInterface"


export const Header = () => {
    const state:any=useSelector(state => state)
    const dispatch = useDispatch();


    const [openSearch, setOpenSearch] = React.useState<boolean>(false)

    useEffect(() => {
        setOpenSearch(false);
    }, [])

    const onClick = () => {
        $(".header-container").slideToggle()
        setOpenSearch(!openSearch)
    }

    const onChangeTerm = (changedTerm:string) => {
        dispatch({type: "CHANGE_TERM", payload:changedTerm})        
    }

    const onChangeMediaType = () => {
        dispatch({type: "CHANGE_MEDIA_TYPE", payload:state.mediaType === "tv" ? "movie" : "tv"})     
    }


    return (
        <header>
            <div className="search-icon-container">
                <SearchSharpIcon className="search-icon search-input-btn" onClick={onClick} />
            </div>

            <div className="header-container">
                <div className="search">
                    <div className="search-container">
                        <SearchSharpIcon className="search-icon search-input-icon" />
                        <input onChange={(e)=>onChangeTerm(e.target.value)}  type="search" className="search-input" name="" id="" />
                    </div>
                </div>
                <div className="filter">
                    <div className="switch">
                        <p className="switch-option">TV Shows</p>
                        <Switch
                            checked={state.mediaType==="tv" ? false : true}
                            onChange={onChangeMediaType}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <p className="switch-option">Movies</p>
                    </div>
                </div>

            </div>



        </header>
    )
}
