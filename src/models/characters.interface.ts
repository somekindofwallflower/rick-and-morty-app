import {CharacterType} from "src/models/character.interface";
import {PaginationType} from "src/models/pagination.interface";

export interface CharactersType {
   info: PaginationType,
   results: CharacterType[]
}
