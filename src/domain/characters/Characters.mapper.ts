import { Common } from "src/services/Common"
import {CharactersQuery} from "src/domain/characters/CharactersQuery"
import {QueryType} from "src/models/query.interface"
import {PayloadAbstract} from "src/domain/PayloadAbstract"
const { FILTER_KEYS } = CharactersQuery;
export class CharactersMapper {

    /**
     * @description From Query => Query String
     * @param query
     */
    static fromQueryToQueryString(query: Object) {
        // Remove all values that are undefined or null
        const queryData = Common.clean({obj: query});
        return new URLSearchParams(queryData).toString();
    }

    /**
     * @description  From Query String => Query
     * @param qs
     */
    static fromQueryStringToQuery(qs: string | undefined) {
        const query = new URLSearchParams(qs);
        const charactersQueryModel = new CharactersQuery();
        charactersQueryModel.page = Number(query.get(FILTER_KEYS.PAGE)) || 1;
        charactersQueryModel.search = query.get(FILTER_KEYS.SEARCH) || undefined;
        return charactersQueryModel;
    }

    static fromQueryToPayload(query: QueryType) {
        const payload = new PayloadAbstract();
        payload.page = query.page;
        return payload;
    }
}
