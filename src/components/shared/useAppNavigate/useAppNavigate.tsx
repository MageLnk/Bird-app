import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Types & Interfaces
interface UseNavigateTypes {
  handleNavigate: (route: string) => void;
}

// App
export const useAppNavigate = (): UseNavigateTypes => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (route: string): void => {
      navigate(route);
    },
    [navigate]
  );

  return { handleNavigate };
};
