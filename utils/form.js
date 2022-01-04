

export const compareFormValues = (oldValues, newValues) => {
    const different = {
        isChanged: false,
        changedValues: new FormData(),
    }
    for(let i in oldValues){
        if(oldValues[i] !== newValues[i]){
            different.isChanged = true;
            different.changedValues.append(i, newValues[i]);
        }
    }
    return different;
}