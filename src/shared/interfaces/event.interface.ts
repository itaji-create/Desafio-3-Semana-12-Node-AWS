import { Document, Schema } from 'mongoose';

interface IEvent extends Document {
  description: string;
  dayOfWeek:
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday';
  userId: Schema.Types.ObjectId;
}

export type { IEvent };
