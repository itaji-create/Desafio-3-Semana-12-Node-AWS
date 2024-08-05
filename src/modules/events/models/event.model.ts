import { IEvent } from '@shared/interfaces/event.interface';
import mongoose, { Schema } from 'mongoose';

const eventSchema: Schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  dayOfWeek: {
    type: String,
    enum: [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Event = mongoose.model<IEvent>('Event', eventSchema);

export default Event;
