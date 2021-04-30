import React, { useEffect } from 'react'
import Switch from '@material-ui/core/Switch';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Header.scss"
import $ from "jquery"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Select from 'react-select'
import AsyncSelect from 'react-select/async';


export const Header = () => {
    const [openSearch, setOpenSearch] = React.useState<boolean>(false)
    const state: any = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        setOpenSearch(false);
    }, [])

    const onClick = () => {
        $(".header-container").slideToggle()
        setOpenSearch(!openSearch)
    }

    const onChangeTerm = (changedTerm: string) => {
        dispatch({ type: "CHANGE_TERM", payload: changedTerm })
    }

    const onChangeMediaType = () => {
        dispatch({ type: "CHANGE_MEDIA_TYPE", payload: state.mediaType === "tv" ? "movie" : "tv" })
    }

    const loadOptions = (inputValue:string, callback:any) => {
        // perform a request
        if (inputValue.length >= 3) {
            fetch(`https://api.themoviedb.org/3/search/${state.mediaType}?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query=${inputValue}&page=1`)
                .then(res => res.json())
                .then(data => {
                    callback(data)

                })
        } else {
            fetch(`https://api.themoviedb.org/3/discover/${state.mediaType}?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1`)
            .then(res => res.json())
            .then(data => {
                callback(data)

            })
        }
        
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

            <div className="header-container">

                <div className="search">
                    <div className="search-container">
                        <SearchSharpIcon className="search-icon search-input-icon" />
                        <AsyncSelect onChange={(e) => onChangeTerm(e.target.value)} value={state.searchTerm} type="search" className="search-input" loadOptions={loadOptions} />
                        {/*<input onChange={(e) => onChangeTerm(e.target.value)} value={state.searchTerm} type="search" className="search-input" name="" id="" />*/ }
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



        </header>
    )
}
