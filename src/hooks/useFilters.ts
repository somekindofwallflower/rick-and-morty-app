import { useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useFilters = ({mapper}: { mapper: any }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const query = useMemo(() => {
        return mapper.fromQueryStringToQuery(location.search);
    }, [location.search, mapper]);

    const onChangeQuery = useCallback(
        (newQuery) => {
            navigate({
                pathname: location.pathname,
                search: mapper.fromQueryToQueryString({...query, ...newQuery}),
            }, {replace: true});
        },
        [navigate, location.pathname, mapper, query]
    );

    return {
        query,
        onChangeQuery,
    };
};
