import { useLayoutEffect } from "react";

export function useDocumentTitle(title) {
  useLayoutEffect(() => {
    document.title = title ?? `Product App`;
  }, [title]);
}
