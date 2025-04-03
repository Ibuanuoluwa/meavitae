import { useLocation } from "react-router-dom";

export function useQueryParam(param: string): string | null {
  const query = new URLSearchParams(useLocation().search);
  return query.get(param);
}
