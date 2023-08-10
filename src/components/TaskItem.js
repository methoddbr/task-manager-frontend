import { useEffect, useState } from "react"

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log('component was mounted')

        return () => {
            console.log('i will unmount')
        }
    }, [])

    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? 'Completa' : 'Não completa'}</p>
        </>
    )
}

export default TaskItem