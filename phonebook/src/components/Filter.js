import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <form>
                <div>
                    filter name : <input onChange={props.onChange}/>
                </div>
            </form>
        </div>
    )
}

export default Filter