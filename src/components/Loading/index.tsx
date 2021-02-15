import { FC } from 'react';

import { Loading as LoadingStyled } from './styles';

const Loading: FC<{
    active: boolean
}> = ({ active }) => {
    return (
        <LoadingStyled active={active} />
    );
}

export default Loading;