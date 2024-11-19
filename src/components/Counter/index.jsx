import { useEffect, useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)

    const _handleReduce = () => {
        setCount((prev) => prev - 1  )
    }
    const _handleIncrement = () => {
        setCount((prev) => prev + 1  )
    }

    useEffect(() => {
      console.log('inicial');
    }, [])
    useEffect(() => {
      console.log('updated');
    }, [count])
    
    return (
        <div>
            {count}
            <button onClick={_handleIncrement}>Aumentar</button>
            <button onClick={_handleReduce}>Disminuir</button>
        </div>
    )
}
export default Counter