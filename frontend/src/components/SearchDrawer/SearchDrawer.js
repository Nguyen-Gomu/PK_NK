import React from 'react'
import {Link} from 'react-router-dom'

// CSS
import './SearchDrawer.css'


const SearchDrawer = ({show,click}) => {
    const searchdrawerClass = ["searchdrawer"];

    if(show) {
        searchdrawerClass.push("show");
    }

    return (
        <div className={searchdrawerClass.join(" ")}>
            <div className="search">
                <div className="search__icon">
                    <Link href='/'>
                        <i class="fas fa-times"></i>
                    </Link>
                </div>
                <form className="search__form" method="get">
                    <div className="search__content">
                        <input type="text" className="search__text" placeholder="Search"></input>
                        <button className="search__arrow"><i class="fas fa-arrow-left"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchDrawer
