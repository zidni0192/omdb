import React, { useState, useRef } from 'react'
import Modal from './modal'

export default function Image({ src }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef()
    return (
        <>
            <div style={{ width: 100, height: 150, overflow: 'hidden', backgroundImage: `url(${src})`, backgroundPosition: 'center', backgroundSize: 'cover' }} onClick={() => setVisible(true)} />
            <Modal visible={visible} forwardRef={ref} setVisible={setVisible}>
                <div style={{ height: '80vh' }} ref={ref}>
                    <img alt={src} src={src} style={{ height: '100%' }} />
                </div>
            </Modal>
        </>
    )
}
