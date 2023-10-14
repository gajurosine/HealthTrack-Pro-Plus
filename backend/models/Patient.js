class Patient{

    constructor(patientID , nationalID ,patientName ,heartRate ,temperature){
        this.patientID=patientID;
        this.nationalID = nationalID;
        this.patientName = patientName;
        this.heartRate = heartRate;
        this.temperature = temperature;

    }
}

module.exports = Patient;