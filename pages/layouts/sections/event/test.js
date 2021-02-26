import React from 'react'
import { Container, Row, Col } from 'reactstrap'
let Test = ({data}) => (
    <React.Fragment>
        <footer className="event contact set-relative bg bg-img3 bg-about p-b-0" id="contact">
            <Container className="p-b-100">
                <Row>
                   <pre>
                       {data}
                   </pre>
                </Row>
            </Container>
        </footer>
    </React.Fragment>
)

Test.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4200/data')
    const json = await res.json()
    return { data: json.text}
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


export default Test;
