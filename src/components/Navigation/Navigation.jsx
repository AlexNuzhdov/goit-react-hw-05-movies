

import {StyledUl, StyledLi, Link} from './Navigation.styled'

export const Navigation = () => {
    return (

        <nav>
            <StyledUl>
                <StyledLi>
                    <Link to="/">Home</Link>
                </StyledLi>
                <StyledLi>
                     <Link to="/movies">Movies</Link>
                </StyledLi>

            </StyledUl>

        </nav>
    )
}
