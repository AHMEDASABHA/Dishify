export interface PaginationStore {
  totalPages: number;
  setTotalPages: (pages: number) => void;
}