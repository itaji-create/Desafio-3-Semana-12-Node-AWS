import { IEvent } from '@shared/interfaces/event.interface';
import Event from '../models/event.model';
import AppError from '@shared/errors/AppError';
import { ObjectId } from 'mongoose';

export const getEvents = async () => {
  const events: IEvent[] = await Event.find();

  if (!events) throw new AppError('Not found', 404, 'Not Found');

  return events;
};

export const getEventById = async (id: string) => {
  const event = await Event.findOne({ _id: id });

  if (!event) throw new AppError('Event Not found', 404, 'Not Found');

  return event;
};

export const createEvent = async (event: IEvent, userId: ObjectId) => {
  const newEvent: IEvent = new Event({
    description: event.description,
    dayOfWeek: event.dayOfWeek,
    userId,
  });

  const savedEvent: IEvent = await newEvent.save();

  return savedEvent;
};

export const deleteEventById = async (id: string) => {
  await getEventById(id);

  await Event.deleteOne({ _id: id });
};
