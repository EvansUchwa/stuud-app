export function setSimpleToaster(type, message = null) {

    let typeToSet = ''
    if (type === "success") {
        typeToSet = 'SET_SUCCESS_TOAST';
    } else {
        typeToSet = 'SET_ERROR_TOAST';
    }
    let payloadToSet = message !== null ? message : "Une erreur s'est produite";

    return {
        type: typeToSet,
        payload: payloadToSet
    }
}