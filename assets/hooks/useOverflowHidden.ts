import {useEffect} from 'react'

export const useOverflowHidden = (open: boolean): void => {
    /**
     * Hide overflow-scroll on right side
     */
    useEffect(() => {
        if (open) {
            const body = document.querySelector<HTMLElement>('body')
            const header = document.querySelector<HTMLElement>('header')
            if (!body || !header) return;
            body.style.overflow = 'hidden'
        }

        return () => {
            const body = document.querySelector<HTMLElement>('body')
            const header = document.querySelector<HTMLElement>('header')
            if (!body || !header) return;
            body.style.overflow = 'initial'
        }
    }, [open])
}
