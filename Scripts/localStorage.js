const saveToLocalStorage = (names) => {

let displayName = getLocalStorage();

if(!displayName.includes(names)){
    displayName.push(names);
}

localStorage.setItem("Names", JSON.stringify(displayName));

}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Names");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (names) => {
    let displayName = getLocalStorage();
    let nameInd = displayName.indexOf(names);

    displayName.splice(nameInd, 1);

    localStorage.setItem("Names", JSON.stringify(displayName))
}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage}