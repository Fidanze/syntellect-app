import { observer } from 'mobx-react-lite'
import { FC, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Control from '../../control/control'
import Store from './store'
import './styles.css'

interface AutocomplitControlProps {
    maxHints?: number
}

const ThirdControl: FC<AutocomplitControlProps> = observer(({ maxHints }) => {
    const [store] = useState(() => new Store())

    return (
        <div className='third-control'>
            <Control store={store} />
            <Hints store={store} maxHints={maxHints} />
        </div>
    )
})

const Hints = observer(
    ({ store, maxHints }: { store: Store; maxHints?: number }) => {
        const ulRef = useRef(null)

        useEffect(() => {
            store.loadHints(store.inputValue, maxHints)
        }, [store.inputValue])

        useOutsideClick(ulRef, () => store.showHints = false)

        return (
            <ul ref={ulRef} className={store.className}>
                {store.hints.map((item) => (
                    <li onClick={() => store.chooseHint(item.fullName)} key={item.name}>
                        <div>
                            <span>{item.name}</span>
                            <img src={item.flag} alt={'flag'} />
                        </div>
                        <span>{item.fullName}</span>
                    </li>
                ))}
            </ul>
        )
    },
)

export default ThirdControl


export const useOutsideClick = (ref: RefObject<HTMLElement>, onClose: () => void) => {
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose()
            }
        },
        [onClose]
    )

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [handleClickOutside])
}