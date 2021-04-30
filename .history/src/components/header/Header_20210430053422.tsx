import React, { useEffect } from 'react'
import Switch from '@material-ui/core/Switch';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Header.scss"
import $ from "jquery"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"


export const Header = () => {
    const [openSearch, setOpenSearch] = React.useState<boolean>(false)
    const state: any = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        setOpenSearch(false);
        if(sessionStorage.getItem("term")!=="undefined")
        dispatch({ type: "CHANGE_TERM", payload: sessionStorage.getItem("term") })
        dispatch({ type: "CHANGE_MEDIA_TYPE", payload: sessionStorage.getItem("mediaType") === "tv" ? "tv" : "movie" })
    }, [])

    const onClick = () => {
        $(".header-container").slideToggle()
        setOpenSearch(!openSearch)
    }

    const onChangeTerm = (changedTerm: string) => {
        dispatch({ type: "CHANGE_TERM", payload: changedTerm })
        sessionStorage.setItem('term', state.changedTerm);
    }

    const onChangeMediaType = () => {
        dispatch({ type: "CHANGE_MEDIA_TYPE", payload: state.mediaType === "tv" ? "movie" : "tv" })
        sessionStorage.setItem('mediaType', state.mediaType === "tv" ? "movie" : "tv");
    }


    return (
        <header>
            {window.location.href.split("/")[3] && (
                <div className="back-button">
                    <Link to="/">
                        <ArrowBackIosIcon />
                    </Link>

                </div>
            )

            }

            <div className="search-icon-container">

                <SearchSharpIcon className="search-icon search-input-btn" onClick={onClick} />

            </div>

            {!window.location.href.split("/")[3] && (
            <div className="header-container">

                <div className="search">
                    <div className="search-container">
                        <SearchSharpIcon className="search-icon search-input-icon" />
                        <input onChange={(e) => onChangeTerm(e.target.value)} value={state.searchTerm} type="search" className="search-input" name="" id="" />
                    </div>
                </div>

                <div className="filter">
                    <div className="switch">
                        <p className="switch-option">TV Shows </p>
                        <Switch
                            checked={state.mediaType === "tv" ? false : true}
                            onChange={onChangeMediaType}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <p className="switch-option">Movies</p>
                    </div>
                </div>

            </div>
            )}


        </header>
    )
}
