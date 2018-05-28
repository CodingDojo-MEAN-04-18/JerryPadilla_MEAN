export class User {
     constructor(
          public id: number = null,
          public firstName: string = '',
          public lastName: string = '',
          public email: string = '',
          public password: (string | number) = '',
          public streetAddress: string = '',
          public unitApt: string = '',
          public city: string = '',
          public state: string = '',
          public feeling: string = '',
     ) {}
}

