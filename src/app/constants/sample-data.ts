import { Where2GoUser } from './user.model';


export const sampleGroup = {
    groups: ["group1", "group2", "group3"]
    
}
export const SampleUsers = {
    userArray: [
        {
            name: 'Todd',
            id: '192841239qwfq',
            locationPreferences: [
                {
                    name: 'Hooters',
                    coordinates: [69, 69, 69],
                    address: '2144 E. Strip Mall Ave. Fresno CA 93720'
                } as unknown as Location,
                {
                    name: 'Todds house',
                    coordinates: [69, 69, 69],
                    address: 'as;ldkfjals;kdjf'
                } as unknown as Location
            ]
        },
        {
            name: 'Jake',
            id: 'awoooooo',
            locationPreferences: [
                {
                    name: 'A certain someones house',
                    coordinates: [69, 69, 69],
                    address: 'hell'
                } as unknown as Location,
                {
                    name: 'Burkeley',
                    coordinates: [69, 69, 69],
                    address: 'literally nowhere'
                }
            ]
        }
    ] as unknown as Array<Where2GoUser>,
}
