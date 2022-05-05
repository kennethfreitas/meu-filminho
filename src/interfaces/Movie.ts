export enum Priority {
  HIGH = 'high',
  LOW = 'low',
}

export interface Movie {
  id: string;
  title: string;
  poster?: string;
  priority?: Priority;
}
