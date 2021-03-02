import React from 'react'
import {useState, useEffect} from 'react'
import { Container, Row } from 'reactstrap'

export default function Test ( ) {

    const [data, setData] = useState([])
        useEffect( () => {
             async function load() {
                 const response = await fetch('https://reqres.in/api/products/4')
                 const json = await response.json()
                 setData(json)
             }
             load()
        }, [])
    return (
        <React.Fragment>
            <footer>
                <Container className="p-b-100">
                    <Row>
                       <pre>
                           {JSON.stringify(data, null, 2)}
                       </pre>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}
//
// Test.getInitialProps = async (ctx) => {
//     const res = await fetch('http://localhost:4200/data')
//     const data = await res.json()
//     return {data}
// }


// Test.getInitialProps = async (ctx) => {
//     const res = await fetch('http://localhost:4200/data')
//     const support = await res.json()
//     return support
// }

// export async function getServerSideProps(context) {
//     const res = await fetch(`http://localhost:4200/data`)
//     const data = await res.json()
//
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {data}, // will be passed to the page component as props
//     }
// }

