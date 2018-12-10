
export class ReferentielService {

    stations = [
        {
            name: 'Port Olisar'
        },
        {
            name: 'Loreville'
        },
        {
            name: 'Levski'
        }

    ];

    getAllStation() {
        return this.stations;
    }

}
