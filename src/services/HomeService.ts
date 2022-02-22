import { AxiosClient } from "src/api/AxiosClient";
import { AxiosResponse } from 'axios';
import { CharacterType } from 'src/models/character.interface';

/**
 * @description Destructured axios and got the data response from its response object
 * @param response
 */
const responseBody = (response: AxiosResponse) => response.data;

/**
 * @description  Created a request object to handle GET and returned the destructured axios body created on line 9
 */
const requests = {
    get: (url: string) => AxiosClient.get(url).then(responseBody),
};


/**
 * @description Created and exported a character object that uses the request object created to handle GET operation using the request objects.
 */
export const Characters = {
    getCharacters: (): Promise<CharacterType[]> => requests.get('character'),
};
