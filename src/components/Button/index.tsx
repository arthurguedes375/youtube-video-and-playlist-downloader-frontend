import { ButtonHTMLAttributes, FC } from 'react';

import { Button as ButtonStyled } from './styles';

const Button: FC<ButtonHTMLAttributes<{}>> = (props) => {
    return (
        <ButtonStyled
            {...props}
        >
            {props.children}
        </ButtonStyled>
    );
}

export default Button;