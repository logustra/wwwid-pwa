import React from 'react'
import {useRouter} from '../store'

export default function Categories() {
    const router = useRouter()
    return (
        <div>
            Categories
            <pre>{JSON.stringify(router.query)}</pre>
        </div>
    )
}
