import React, { Fragment, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { SKILL_LIST } from "../utils/consts";

const Skills = ({ modifier }) => {
    const [totalSkillPoints, setTotalSkillPoints] = useState(
        10 + 4 * modifier.IntelligenceModifier
    );
    const [skillInDD, setSkillInDD] = useState("Acrobatics");
    const [dc, setDc] = useState(20);
    const [roll, setRoll] = useState(null);
    const [result, setResult] = useState("");
    const [totalSkillPointsUsed, setTotalSkillPointsUsed] = useState(0);

    let initState = {};
    SKILL_LIST.map((s) => (initState[s["name"]] = 0));

    const [skills, setSkills] = useState(initState);

    useEffect(() => {
        setTotalSkillPoints(10 + 4 * modifier.IntelligenceModifier);
    }, [modifier]);

    const handleSkillPointsPlusChange = (skillName) => {
        if (totalSkillPointsUsed <= totalSkillPoints - 1) {
            setTotalSkillPointsUsed(totalSkillPointsUsed + 1);
        } else {
            alert(
                "You need more skill points! Upgrade intelligence to get more"
            );
            return null;
        }
        setSkills((prevSkills) => ({
            ...prevSkills,
            [skillName]: prevSkills[skillName] + 1,
        }));
        setRoll(null);
    };

    const handleSkillPointsMinusChange = (skillName) => {
        setTotalSkillPointsUsed(totalSkillPointsUsed - 1);
        setSkills((prevSkills) => ({
            ...prevSkills,
            [skillName]: prevSkills[skillName] - 1,
        }));
        setRoll(null);
    };

    const onRoll = (min, max) => {
        const rolled = Math.floor(Math.random() * (max - min + 1)) + min;
        setRoll(rolled);
        if (skills[skillInDD] + rolled >= dc) {
            setResult("Successsful");
        } else {
            setResult("Failure");
        }
    };

    return (
        <Fragment>
            <Card
                style={{
                    width: "30rem",
                    textAlign: "center",
                    marginTop: "15px",
                }}
            >
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>Skills</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span>
                            <i>
                                <strong>
                                    Total Skill Points available:{" "}
                                    {totalSkillPoints}
                                </strong>
                            </i>
                        </span>
                    </ListGroup.Item>
                    {SKILL_LIST.map((sk, index) => (
                        <ListGroup.Item key={index}>
                            <span>
                                {sk.name} : {skills[sk.name]}
                            </span>
                            <span>
                                {" "}
                                (Modifier: {sk.attributeModifier}):{" "}
                                {modifier[sk.attributeModifier + "Modifier"]}{" "}
                            </span>
                            <button
                                onClick={() =>
                                    handleSkillPointsPlusChange(sk.name)
                                }
                            >
                                +
                            </button>
                            <span> </span>
                            <button
                                onClick={() =>
                                    handleSkillPointsMinusChange(sk.name)
                                }
                            >
                                -
                            </button>
                            <span>
                                {" "}
                                Total:{" "}
                                {skills[sk.name] +
                                    modifier[sk.attributeModifier + "Modifier"]}
                            </span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            <Card style={{ marginTop: "15px" }}>
                <ListGroup.Item>
                    <h4>Skill Check</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>
                        <select
                            name="skillList"
                            id="skillList"
                            onChange={(e) => setSkillInDD(e.target.value)}
                        >
                            {SKILL_LIST.map((sk, index) => (
                                <option key={index} value={sk.name}>
                                    {sk.name}
                                </option>
                            ))}
                        </select>
                    </span>
                    <span> DC: </span>
                    <input
                        type="text"
                        value={dc}
                        onChange={(e) => setDc(e.target.value)}
                    />
                    {"  "}
                    <button onClick={() => onRoll(1, 20)}>Roll</button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>
                        SKill: {skillInDD}: {skills[skillInDD]}
                    </span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>You rolled: {roll}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>The DC was: {dc}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Result: {result}</h5>
                </ListGroup.Item>
            </Card>
        </Fragment>
    );
};

export default Skills;
