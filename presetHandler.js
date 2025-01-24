// Use this presets array inside your presetHandler
const presets = require('./presets');

function getPreset(index){
    return presets[index] || null;
}

function createUpdatePreset(index, array){
    if(!presets[index]){
        return;
    }
    presets[index] = array;
    return presets[index];
}

const presetHandler = (requestMethod, index, newPresetArray) => {
    if (requestMethod === 'GET'){
        let preset = getPreset(index);
        if (preset){
            return [200, preset];
        } else {
            return [404];
        }
    } else if (method === 'PUT'){
        const newPreset = createUpdatePreset(index, newPresetArray);
        if(newPreset) {
            return [200, newPreset];
        } else {
            return [404];
        }
    } else {
        return [400];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
