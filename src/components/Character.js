import React, { useState } from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import Attributes from "./Attributes";
import Classes from "./Classes";
import Skills from "./Skills";
import { calculateModifier } from "../utils/Functions";
import { ATTRIBUTE_LIST } from "../utils/consts";

const Character = ({ count }) => {
    let initState = {};
    ATTRIBUTE_LIST.map((attr) => (initState[attr] = 10));

    const [attributes, setAttributes] = useState(initState);
    const [modifier, setModifier] = useState({
        StrengthModifier: 0,
        DexterityModifier: 0,
        ConstitutionModifier: 0,
        IntelligenceModifier: 0,
        WisdomModifier: 0,
        CharismaModifier: 0,
    });

    const [totalAttrPoints, setTotalAttrPoints] = useState(60);

    const handleAttributePlusChange = (attributeName) => {
        if (totalAttrPoints <= 69) {
            setTotalAttrPoints(totalAttrPoints + 1);
        } else {
            alert("A Character can have up to 70 Delegated Attribute Points");
            return null;
        }

        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attributeName]: prevAttributes[attributeName] + 1,
        }));

        setModifier((prevModifier) => ({
            ...prevModifier,
            [attributeName + "Modifier"]: calculateModifier(
                attributes[attributeName] + 1
            ),
        }));
    };

    const handleAttributeMinusChange = (attributeName) => {
        setTotalAttrPoints(totalAttrPoints - 1);

        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attributeName]: prevAttributes[attributeName] - 1,
        }));

        setModifier((prevModifier) => ({
            ...prevModifier,
            [attributeName + "Modifier"]: calculateModifier(
                attributes[attributeName] - 1
            ),
        }));
    };

    return (
        <Card
            style={{
                paddingBottom: "15px",
                marginTop: "15px",
                textAlign: "center",
            }}
        >
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Character {count}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <Attributes
                                attributes={attributes}
                                modifier={modifier}
                                handleAttributePlusChange={
                                    handleAttributePlusChange
                                }
                                handleAttributeMinusChange={
                                    handleAttributeMinusChange
                                }
                            />
                        </Col>
                        <Col>
                            <Classes attributes={attributes} />
                        </Col>
                        <Col>
                            <Skills modifier={modifier} />
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default Character;
