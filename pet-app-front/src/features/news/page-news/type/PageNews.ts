
export default interface PageNews {
    totalElements: number;
    totalPages: number;
    size: number;
    content: Array<{
      id: number;
      title: string;
      imageUrl: string;
      text: string;
      isDeleted: boolean;
      date: string;
    }>;
  }
