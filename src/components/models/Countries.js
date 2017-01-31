import { sample } from 'lodash'

export default class Countries {

  constructor() {
    // Refactor this into db & api
    this.countries = [
      {
        'country': 'France',
        'capital': 'Paris'
      },
      {
        'country': 'Germany',
        'capital': 'Berlin'
      },
      {
        'country': 'Poland',
        'capital': 'Warsaw'
      }
    ];
	}

  getRandomCountry() {
    return sample(this.countries)
  }
}
