import React from 'react'

export default function Footer() {

    const style={
        position: 'absolute',
        top: '100vh',
        width: '100%'
    }
    return (
        <>
            <div className="bg-dark text-light text-center py-1" style={style}>Copyright &copy; TEXT-TOOL</div>
        </>
    )
}