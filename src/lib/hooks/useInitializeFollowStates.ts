import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeFollowState } from "@/lib/features/followSlice";

/**
 * Hook to initialize follow states from service data
 * This should be called once when the app loads or when service data is fetched
 */
export const useInitializeFollowStates = (
  services: Array<{ companyId: string; companyFollowingState: boolean }>,
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (services && services.length > 0) {
      const followStates = services.reduce(
        (acc, service) => {
          acc[service.companyId] = service.companyFollowingState;
          return acc;
        },
        {} as Record<string, boolean>,
      );

      dispatch(initializeFollowState(followStates));
    }
  }, [services, dispatch]);
};
