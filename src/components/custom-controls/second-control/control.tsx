import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'
import Button from '../../button/button'
import Control from '../../control/control'
import Store from './store'

const SecondControl: FC = observer(() => {
    const [store] = useState(() => new Store())

    return (
        <Control
            buttonsLeft={[
                <Button key={'number'} onClick={() => store.alertNumber()}>
                    Alert Number
                </Button>,
            ]}
            buttonsRight={[
                <Button key={'everything'} onClick={() => store.alertValue()}>
                    Alert Everything
                </Button>,
            ]}
            store={store}
        />
    )
})

export default SecondControl
