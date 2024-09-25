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

            /**
             * Hides scroll, reserves space for scroll width
             */
            body.style.paddingRight = '4px'
            body.style.background = 'transparent'
            header.style.paddingRight = '4px'
        }

        return () => {
            const body = document.querySelector<HTMLElement>('body')
            const header = document.querySelector<HTMLElement>('header')
            if (!body || !header) return;
            body.style.overflow = 'initial'

            /**
             * Scroll appears reserve place is hidden
             */
            body.style.paddingRight = '0'
            header.style.paddingRight = '0'
        }
    }, [open])
}
