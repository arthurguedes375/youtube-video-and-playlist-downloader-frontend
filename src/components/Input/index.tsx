import { FC, InputHTMLAttributes } from 'react';

import { Input as InputStyled } from './styles';

const Input: FC<InputHTMLAttributes<{}>> = (props) => {
    return (
        <InputStyled
            {...props}
        />
    );
}

export default Input;