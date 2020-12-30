export interface Skill {
  Id: number;
  Title: string;
  Hours: number;
  Completed: boolean;
  DueDate?: Date;
  Modified?: Date;
  Created?: Date;
  AuthorId?: number;
  EditorId?: number;
  GUID?: string;
}
