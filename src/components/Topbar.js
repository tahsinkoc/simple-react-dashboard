import React from 'react'
import Pop from './Pop'
import { MdCreateNewFolder } from 'react-icons/md'

function Topbar(props) {
    const { teacher, eve, cls } = props

    function whoIs() {
        if (teacher) {
            return (
                <div className="topBar">
                    <div className="topTitle">
                        <h1>Gruplar</h1>
                        <h1>Grup Sayısı: 2</h1>
                        <h1>
                            <button onClick={cls}>
                                <MdCreateNewFolder size={20} />
                                &nbsp;
                                GRUP OLUŞTUR
                            </button>
                        </h1>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="topBar">
                    <div className="topTitle">
                        <h1>Gruplarım</h1>
                        <h1>Grup Sayısı: 2</h1>
                        <h1>
                            <button>
                                <MdCreateNewFolder size={20} />
                                &nbsp;
                                GRUBA KATIL
                            </button>
                        </h1>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <Pop type={'group'} eve={eve} cls={cls}/>
            {whoIs()}
        </div>
    )
}

export default Topbar