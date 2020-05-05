
export class User {

    constructor(
        public firstName: string,
        public lastName:  string,
        public userName: string,
        public email: string,
        // second tab
        public dateOfBirth: Date,
        public country: string,
        public mobile: number,
        public gender: string,
        //others field
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date,
        public password?: string,
        ){}

        get token(){
          if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
          }
          return this._token
        }

}

