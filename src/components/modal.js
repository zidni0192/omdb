import React from 'react'
import { useEffect } from 'react'

export default function Modal({ children, visible, forwardRef, setVisible }) {

    useEffect(() => {
        function handleClickOutside(event) {
            if (forwardRef.current && !forwardRef.current.contains(event.target)) {
                setVisible(false)
            }
        }

        document && document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document && document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [forwardRef])
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#3a3a3aaa', position: 'fixed', top: 0, left: 0, alignItems: 'center', justifyContent: 'center', display: visible ? 'flex' : 'none' }}>
            {children}
        </div>
    )
}