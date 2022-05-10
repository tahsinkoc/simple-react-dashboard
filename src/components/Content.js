import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'

function Content(props) {

    const { teacher } = props

    function whoIs() {
        if (teacher) {
            return (
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Grup Adı</th>
                                <th>Öğrenci Sayısı</th>
                                <th>Yönet</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Grup 1</td>
                                <td>2</td>
                                <td>
                                    <button title='DÜZENLE'>
                                        <RiEditBoxFill size={20} />
                                    </button>
                                    <button title='SİL'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Grup 2</td>
                                <td>2</td>
                                <td>
                                    <button title='DÜZENLE'>
                                        <RiEditBoxFill size={20} />
                                    </button>
                                    <button title='SİL'>
                                        <AiFillDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Grup Adı</th>
                                <th>Öğrenci Sayısı</th>
                                <th>Görevler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Grup 1</td>
                                <td>2</td>
                                <td>
                                   Görev Yok
                                </td>
                            </tr>
                            <tr>
                                <td>Grup 2</td>
                                <td>2</td>
                                <td>
                                    <button>
                                        <RiEditBoxFill size={20} />
                                        &nbsp;
                                        Görevleri Gör
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    return (
        <div>
            {/* <Pop type={'group'} eve={open} cls={toggle}/> */}
            {whoIs()}
        </div>
    )
}

export default Content