import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'
import Button from '../../button/button'
import Control from '../../control/control'
import Store from './store'

const FirstControl: FC = observer(() => {
    const [store] = useState(() => new Store())

    return (
        <Control
            store={store}
            buttonsRight={[
                <Button key='clear' onClick={() => store.clearInput()}>
                    Clear
                </Button>,
                <Button key='set' onClick={() => store.helloInput()}>
                    Hello world
                </Button>
            ]}
        />
    )
})

export default FirstControl
