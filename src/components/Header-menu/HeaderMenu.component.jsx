import { NavMenu,Option } from "./HeaderMenu.styles"
import homeIcon from "../../assets/images/home-icon.svg"
import searchIcon from "../../assets/images/search-icon.svg"
import moveIcon from "../../assets/images/movie-icon.svg"
import watchListIcon from "../../assets/images/watchlist-icon.svg"
import originalsIcon from "../../assets/images/original-icon.svg"
import seriesIcon from "../../assets/images/series-icon.svg"




const HeaderMenu =()=>{
    return(
        <NavMenu>
            <Option href="/home">
                <img src={homeIcon} alt="home icon"/>
                <span>HOME</span>
            </Option>
            <Option href="/search">
                <img src={searchIcon} alt="home icon"/>
                <span>SEARCH</span>
            </Option>
            <Option href="/watchList">
                <img src={watchListIcon} alt="home icon"/>
                <span>WATCHLIST</span>
            </Option>
            <Option href="/originals">
                <img src={originalsIcon} alt="home icon"/>
                <span>ORIGINALS</span>
            </Option>
            <Option href="/movies">
                <img src={moveIcon} alt="home icon"/>
                <span>MOVIES</span>
            </Option>
            <Option href="/series">
                <img src={seriesIcon} alt="home icon"/>
                <span>SERIES</span>
            </Option>
        </NavMenu>
    )
}
export default HeaderMenu