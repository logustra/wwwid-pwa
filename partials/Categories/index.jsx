import React from 'react'
import { useRouter } from '../../store'

export default function Categories() {
    const router = useRouter()
    const data = router.query

    return (
        <div>
            {data.title}
        </div>
    )
}
