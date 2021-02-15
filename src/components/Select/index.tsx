import { FC, SelectHTMLAttributes } from 'react';

import { Select as SelectStyled } from './styles';

const Select: FC<SelectHTMLAttributes<{}>> = (props) => {
    return (
        <SelectStyled  {...props} >
            {props.children}
        </SelectStyled>
    );
}

export default Select;