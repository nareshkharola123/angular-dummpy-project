
export class User {

    constructor(
        public firstName: string, // required
        public lastName:  string, // required
        public middleName: string,
        public nickName: string,
        public email: string,
        public status: boolean, // arms forces and notable
        // second tab
        public dateOfDeath: Date,  // required
        public dateOfBitPublishing: Date, // required
        // third tab
        // public locationOfDeath: string, // required
        public locationOfDeathCity: string,
        public locationOfDeathState: string,
        public locationOfDeathZipCode: number,
        // public locationOFResidence: string, // required
        public locationOfResidenceCity: string,
        public locationOfResidenceState: string,
        public locationOfResidenceZipCode: number,
        // multiple row
        public image: string,
        public imageDescription: string,
        public typeOfImage: string,
        // ta
        public emblem: string,
        public emblemDescription: string,
        public tyeOfEmblem: string,
        // public removeOEmblem: string, // checkbox
        //tab
        public typeOfService: string, // dropdown
        // public location: string,
        public cityOfService: string,
        public stateOfService: string,
        public zipCodeOfService: number,
        // public removeCheckbox: string,
        //tab
        public narrative: string, // textArea
        //tab
        // all preview images of forms and submit button
        ){}

}

