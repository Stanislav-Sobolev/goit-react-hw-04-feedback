import { BtnListStyled, BtnStyled } from "./feedback.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (

            <BtnListStyled>
                {Object.keys(options).map(stateKey => (
                    <BtnStyled key={stateKey} onClick={ () => onLeaveFeedback(stateKey)}>{ stateKey }</BtnStyled>
                ))
                }
            </BtnListStyled>
    

)