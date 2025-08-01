import { useState, useEffect } from "react";

/**
 * A simple hook to determine if the component has mounted on the client.
 * This is useful for preventing server-side rendering of client-only components
 * and avoiding hydration errors.
 * @returns {boolean} - True if the component has mounted, false otherwise.
 */
export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
