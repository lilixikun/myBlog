import React from 'react'
import { DiamonLoading } from 'react-loadingg';

export default function PageLoading(props) {
    return (
        <>
            <DiamonLoading />
            {props.children}
        </>
    )
}