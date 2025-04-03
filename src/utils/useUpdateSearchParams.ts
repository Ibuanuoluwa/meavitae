import { useHistory, useLocation } from "react-router-dom";

export const useUpdateSearchParams = () => {
  const history = useHistory();
  const location = useLocation();

  /**
   * Updates a specific query parameter while preserving others.
   * @param key The query parameter key to update
   * @param value The value to set for the query parameter
   */
  const updateSearchParams = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    history.push({ search: searchParams.toString() });
  };

  return updateSearchParams;
};
