export interface articalesEntity {
    source: Source[];
    auther: string;
    title: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }
  
  export interface NewsResponse {
    status: string;
    totalResults:number;
    articales: articalesEntity[];
  }
  export interface Source {
    id: string;
    name: string;
  }
  