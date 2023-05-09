export const minRequirementsMet = (setAttr, requiredAttr) => {
    if (setAttr.Strength < requiredAttr.Strength) return false;
    if (setAttr.Dexterity < requiredAttr.Dexterity) return false;
    if (setAttr.Constitution < requiredAttr.Constitution) return false;
    if (setAttr.Intelligence < requiredAttr.Intelligence) return false;
    if (setAttr.Wisdom < requiredAttr.Wisdom) return false;
    if (setAttr.Charisma < requiredAttr.Charisma) return false;

    return true;
};

export const calculateModifier = (attrPoints) => {
    let modifier = 0;

    if (attrPoints >= 10) {
        modifier = Math.floor((attrPoints - 10) / 2);
    } else if (attrPoints === 9) {
        modifier = -1;
    } else {
        modifier = -(Math.floor((9 - attrPoints) / 2) + 1);
    }
    return modifier;
};
