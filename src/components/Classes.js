import React, { Fragment, useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { minRequirementsMet } from "../utils/Functions";
import { CLASS_LIST } from "../utils/consts";

const Class = ({ attributes }) => {
    const wizardAttr = CLASS_LIST.Wizard;
    const barbarianAttr = CLASS_LIST.Barbarian;
    const bardAttr = CLASS_LIST.Bard;

    const [cls, setCls] = useState(null);
    const [attr, setAttr] = useState({});
    const [wizardRequirementsMet, setWizardRequirementsMet] = useState(false);
    const [barbarianRequirementsMet, setBarbarianRequirementsMet] =
        useState(false);
    const [bardRequirementsMet, setBardRequirementsMet] = useState(false);

    useEffect(() => {
        setWizardRequirementsMet(minRequirementsMet(attributes, wizardAttr));
        setBarbarianRequirementsMet(
            minRequirementsMet(attributes, barbarianAttr)
        );
        setBardRequirementsMet(minRequirementsMet(attributes, bardAttr));
    }, [attributes]);

    const handleShowAttr = (c) => {
        switch (c) {
            case "Wizard":
                setCls("Wizard");
                setAttr(wizardAttr);
                break;
            case "Barbarian":
                setCls("Barbarian");
                setAttr(barbarianAttr);
                break;
            case "Bard":
                setCls("Bard");
                setAttr(bardAttr);
                break;
            default:
                setAttr(wizardAttr);
        }
    };

    const handleHideAttr = (c) => {
        setCls(null);
        setAttr({});
    };

    return (
        <Fragment>
            <Card
                style={{
                    width: "19rem",
                    textAlign: "center",
                    marginTop: "15px",
                }}
            >
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>Classes</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button
                            onClick={() => handleShowAttr("Barbarian")}
                            style={{
                                border: "none",
                                backgroundColor: barbarianRequirementsMet
                                    ? "green"
                                    : "grey",
                            }}
                        >
                            Barbarian
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            onClick={() => handleShowAttr("Wizard")}
                            style={{
                                border: "none",
                                backgroundColor: wizardRequirementsMet
                                    ? "green"
                                    : "grey",
                            }}
                        >
                            Wizard
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            onClick={() => handleShowAttr("Bard")}
                            style={{
                                border: "none",
                                backgroundColor: bardRequirementsMet
                                    ? "green"
                                    : "grey",
                            }}
                        >
                            Bard
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            {cls && (
                <Card
                    style={{
                        width: "19rem",
                        textAlign: "center",
                        marginTop: "15px",
                    }}
                >
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h4>{cls} Minimum Requirements</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Strength : {attr.Strength}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Dexterity : {attr.Dexterity}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Constitution : {attr.Constitution}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Intelligence : {attr.Intelligence}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Wisdom : {attr.Wisdom}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Charisma : {attr.Charisma}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <button onClick={handleHideAttr}>
                                Close Requirement View
                            </button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            )}
        </Fragment>
    );
};

export default Class;
