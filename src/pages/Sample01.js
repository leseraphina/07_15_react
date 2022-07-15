import React from 'react'
import './page.css'
import Sec01 from '../source/Sec01'

//  추가컴포넌트

function Sample01(){
    return (
        <>
        <article id="sample01">
            <h1>sample01페이지 입니다.</h1>
            <p>welcome sample01</p>
            <Sec01 />
        </article>
        </>
    )
}

export default Sample01