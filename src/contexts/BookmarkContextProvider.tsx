import { createContext } from "react";
import { useLocalStorage, useJobItems } from "../lib/hooks";
import { JobItem } from "../lib/types";

type BookmarkContext = {
  bookmarkedId: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedJobItems: JobItem[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarkContext | null>(null);

export default function BookmarkContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedId, setBookmarkedId] = useLocalStorage<number[]>("bookmarkedIds", []);

  const { jobItems: bookmarkedJobItems, isLoading } = useJobItems(bookmarkedId);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedId.includes(id)) {
      setBookmarkedId((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedId((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedId,
        handleToggleBookmark,
        bookmarkedJobItems: bookmarkedJobItems || [],
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
