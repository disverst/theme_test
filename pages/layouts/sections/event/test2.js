import React from 'react'
import { Container, Row } from 'reactstrap'

export default function Test2 ( {data} ) {
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

Test2.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4200/data')
    const data = await res.json()
    return {
        data
    }
}


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


