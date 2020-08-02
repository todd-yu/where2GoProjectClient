export class Where2GoUser {
    name: string;
    id: string;
    locationPreferences: Array<Location>;
    
}

export class Where2GoGroup {
    users: Array<Where2GoUser>;
    
}

export class Location {
    name: string;
    coordinates: Array<number>;
    address: string;
    
}

// export class Groups {
//     groups: Array<any>;
// }