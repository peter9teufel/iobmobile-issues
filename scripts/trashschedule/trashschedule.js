// SCRIPT SETTINGS ###############################################################################################################################
/*
    SCRIPT SETTINGS:
    Adapt these settings to match your desired configuration
        SHOW_WEEKDAY: if true, the date string contains the weekday for example in format "MO, 02.09.2024" or "Montag, 02.09.2024"
        USE_SHORT_WEEKDAY: if true the weekday is shown abbreviated, e.g. "MO", "DI", ..., if false the weekday is shown in full length, e.g. "Montag", "Dienstag", ...
        NUM_NEXT_EVENTS: maximum number of upcoming trashschedule events to be saved in the result JSON
        TRASHSCHEDULE_INSTANCE_NUMBER: trashschedule instance number in case you have more instances
        NUM_DAYS_INSTEAD_OF_DATE: if the event is tomorrow, the date string is replaced by "Morgen", if the days left to the event is within NUM_DAYS_INSTEAD_OF_DATE, the date string is replaced by "in X Tagen"
        TRASHSCHEDULE_DATAPOINT_TYPE: default is 'string' so the value can be easily viewed in the objects tree in iobroker admin
*/
const SHOW_WEEKDAY = true;
const USE_SHORT_WEEKDAY = true;
const NUM_NEXT_EVENTS = 4;
const TRASHSCHEDULE_INSTANCE_NUMBER = 0;
const NUM_DAYS_INSTEAD_OF_DATE = 2;
const TRASHSCHEDULE_DATAPOINT_TYPE = 'string';


// SCHEDULE #######################################################################################################################################
/*
    Scheduling of automatic updates, first digit is the minute, second digit is the hour of day, default update is daily at 3:00
    If the default schedule does not fit your needs, feel free to add more schedules or adapt the default one
    If you are not familiar with this syntax, google "cron syntax" ;-)
*/
schedule('0 3 * * *', runUpdate);


// DATAPOINTS #####################################################################################################################################
/*
    Paths for the datapoint where the result JSON is saved in userdata, do not modify if you don't know what you are doing ;-)
*/
const ID_USERDATA_IOB_MOBILE_DIR = '0_userdata.0.iobmobile';
const ID_USERDATA_TRASHSCHEDULE_DIR = ID_USERDATA_IOB_MOBILE_DIR + '.trashschedule';
const ID_USERDATA_IOB_MOBILE_TRASHSCHEDULE_JSON = ID_USERDATA_TRASHSCHEDULE_DIR + '.trashschedule_events';





// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// ################################################################################################################################################
// DANGER ZONE ####################################################################################################################################
// DO NOT CHANGE ANYTHING BELOW! ##################################################################################################################
// Below is where the magic happens, DO NOT CHANGE ANYTHING BELOW except you know what you are doing ##############################################
// ################################################################################################################################################

// id to datapoint that contains a JSON with all upcoming trashschedule events
const ID_TRASHSCHEDULE_TYPES = 'trashschedule.' + TRASHSCHEDULE_INSTANCE_NUMBER + '.type.json';

// array of weekdays for display output
const WEEKDAYS = ['SO', 'MO','DI','MI','DO','FR','SA'];
const WEEKDAYS_LONG = ['Sonntag', 'Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];

// call runUpdate() when the script is started or saved
runUpdate();

// function creates paths and datapoint if necessery and calls updateJson()
function runUpdate(){
    createFolderIfNotExists(ID_USERDATA_IOB_MOBILE_DIR);
    createFolderIfNotExists(ID_USERDATA_TRASHSCHEDULE_DIR);
    createDatapointIfNotExists(ID_USERDATA_IOB_MOBILE_TRASHSCHEDULE_JSON, '{}', 'Trashschedule Termine', TRASHSCHEDULE_DATAPOINT_TYPE, 'value', function(){
        // run update JSON in callback in case the datapoint did not exist and was newly created
        updateJson();
    });
    // run update JSON in case the datapoint already existed and has not been created, thus the state created callback was not triggered
    updateJson();
}

function createFolderIfNotExists(id, name){
    if(!existsObject(id)){
        setObject(id, {type: 'channel', common: {name: name}, native: {}})
    }
}

function createDatapointIfNotExists(id, initial, name, dataType, role = 'value', setStateCallback = () => {}){
    if (!existsState(id )) {
        createState(id,initial,{name: name,  type: dataType, role: role}, setStateCallback); 
    }
}

function updateJson(){
    let data = getState(ID_TRASHSCHEDULE_TYPES).val;
    let jsonData = JSON.parse(data);
    let result = {};
    for(var i = 0; i < jsonData.length && i < NUM_NEXT_EVENTS; i++){
        let e = jsonData[i];
        let d = new Date(e.nextDate);
        let dStr = formatDate(d);
        if(e.daysLeft == 1){
            dStr = 'Morgen';
        }else if(e.daysLeft <= NUM_DAYS_INSTEAD_OF_DATE){
            dStr = 'in ' + e.daysLeft + ' Tagen';
        }
        result[e.name] = dStr;
    }
    let newData = result;
    if(TRASHSCHEDULE_DATAPOINT_TYPE == 'string'){
        newData = JSON.stringify(result);
    }
    setState(ID_USERDATA_IOB_MOBILE_TRASHSCHEDULE_JSON, newData, true);
}

function formatDate(date){
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    if(SHOW_WEEKDAY){
        let wd = WEEKDAYS[date.getDay()];
        if(!USE_SHORT_WEEKDAY){
            wd = WEEKDAYS_LONG[date.getDay()];
        }
        return  wd + ', ' + date.toLocaleDateString('de-DE', options);
    }
    return date.toLocaleDateString('de-DE', options);
}