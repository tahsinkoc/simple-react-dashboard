import React from 'react'
import { MdGroups } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { CgUnavailable } from 'react-icons/cg'
import { MdOutlineAnnouncement } from 'react-icons/md'
import Pop from './Pop'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Leftbar(props) {

    const { teacher } = props

    function whoIs() {
        if (teacher) {
            return (

                <div>
                    <input id='chk' type="checkbox" />
                    <label className='chk' htmlFor="chk">
                        <FaBars />
                    </label>
                    <div className="leftBar">

                        <div className="leftBar__title">
                            <h1>Leftbar</h1>
                        </div>
                        <div className="leftBar__content">
                            <a href="#">
                                <MdGroups size={30} />
                                &nbsp;
                                Gruplar
                            </a>
                            <a href="#">
                                <BsFillPersonFill size={30} />
                                &nbsp;
                                Öğrenciler
                            </a>
                            <a href="#">
                                <CgUnavailable size={30} />
                                &nbsp;
                                Grupsuz Öğrenciler
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <input id='chk' type="checkbox" />
                    <label className='chk' htmlFor="chk">
                        <FaBars />
                    </label>
                    <div className="leftBar">
                        <div className="leftBar__title">
                            <h1>Leftbar</h1>
                        </div>
                        <div className="leftBar__content">
                            <a href="#">
                                <MdGroups size={30} />
                                &nbsp;
                                Gruplarım
                            </a>
                            <a href="#">
                                <MdOutlineAnnouncement size={30} />
                                &nbsp;
                                Duyurular
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {whoIs()}
        </div>
    )
}

export default Leftbar