export class Where2GoUser {
    name: string;
    id?: string;
    locationPreferences: Array<Location>;
    
}

export class Location {
    name: string;
    coordinates: Array<number>;
    address: string;
    
}