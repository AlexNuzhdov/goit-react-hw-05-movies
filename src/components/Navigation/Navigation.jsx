

import {StyledUl, StyledLi, Link} from './Navigation.styled'

export const Navigation = () => {
    return (

        <nav>
            <StyledUl>
                <StyledLi>
                    <Link exact to="/">Home</Link>
                </StyledLi>
                <StyledLi>
                     <Link exact to="/movies">Movies</Link>
                </StyledLi>

            </StyledUl>

        </nav>
    )
}
