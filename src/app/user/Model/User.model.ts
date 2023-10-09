export class User{
    idCustomer: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    password: string;
    profession: string;
    accountCategory: string;
    picture: string;
    
    constructor() {
        this.idCustomer = 0;
        this.firstName = '';
        this.lastName = '';
        this.birthDate = '';
        this.email = '';
        this.password = '';
        this.profession = '';
        this.accountCategory = '';
        this.picture = '';
      }
    }