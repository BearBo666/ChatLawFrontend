import { Container, Row, Col } from "react-bootstrap";
import { Card } from './Card'

import './index.css'

export const Main = () => {
    return (
        <div className="main">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}