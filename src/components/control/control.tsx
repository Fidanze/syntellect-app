import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import './styles.css'

interface ControlProps {
  store: { inputValue: string, changeInput: (newVal: string) => void }
  buttonsLeft?: ReactElement[]
  buttonsRight?: ReactElement[]
}

const Control: FC<ControlProps> = observer(({
  buttonsLeft = [],
  buttonsRight = [],
  store
}) => {
  return (
    <div className='control'>
      {buttonsLeft.map((item) => item)}
      <input
        value={store.inputValue}
        onChange={(e) => store.changeInput(e.target.value)}
      />
      {buttonsRight.map((item) => item)}
    </div>
  )
})

export default Control
