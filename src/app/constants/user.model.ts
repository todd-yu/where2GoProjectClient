export class Where2GoUser {
    name: string;
    id: number;
    locationPreferences: Array<Location>;
    
    constructor(name: string) {
        this.name = name;
        this.id = Date.now();
    }
}

export class Location {
    name: string;
    coordinates: Array<number>;
    address: string;
    votes: number;
}

// export class Groups {
//     groups: Array<any>;
// }