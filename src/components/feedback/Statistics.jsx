import { StateListStyled, StateElStyled } from "./feedback.styled";

export const Statistics = ({allStates, total, positivePercentage }) => (
    <>
    <p>Statistics</p>
    <StateListStyled>
        {Object.entries(allStates).map(el => (
            <StateElStyled key={el[0]}>
                {el[0]}: {el[1]}
            </StateElStyled>
        ))
        }
    </StateListStyled>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>

    </>
)