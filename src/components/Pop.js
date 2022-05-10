import React from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'

function Pop(props) {

    const { type, eve, cls } = props

    function loadPop() {
        if (type === 'group') {
            return (
                <div className="wf">
                    <div className="pop">
                        <button onClick={cls} className="x">
                            <AiOutlineCloseSquare />
                        </button>
                        <div className="inpBox">
                            <label htmlFor="">Grup Adı Giriniz</label>
                            <input type="text" placeholder='Grup Adı Giriniz' />
                            <button id='submit'>OLUŞTUR</button>
                        </div>
                    </div>
                </div>

            )
        }
    }



    return (
        <div>
            {eve ? loadPop() : null}
        </div>
    )
}

export default Pop