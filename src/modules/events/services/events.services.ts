import { IEvent, IEventFilters } from '@shared/interfaces/event.interface';
import Event from '../models/event.model';
import AppError from '@shared/errors/AppError';
import mongoose, { FilterQuery, ObjectId } from 'mongoose';

export const getEvents = async (filters: IEventFilters): Promise<IEvent[]> => {
  const { dayOfWeek, description } = filters;

  const filter: FilterQuery<IEvent> = {};

  if (dayOfWeek) {
    filter.dayOfWeek = dayOfWeek;
  }

  if (description) {
    filter.description = { $regex: new RegExp(description, 'i') }; // Busca case-insensitive
  }

  const events = await Event.find(filter);

  if (events.length === 0) throw new AppError('Not found', 404, 'Not Found');

  return events;
};

export const getEventById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError('Invalid ID format', 400, 'Bad Request');
  }
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
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError('Invalid ID format', 400, 'Bad Request');
  }

  await getEventById(id);

  await Event.deleteOne({ _id: id });
};

export const deleteEventsByDayOfWeek = async (dayOfWeek: string) => {
  if (!dayOfWeek) {
    throw new AppError(
      'dayOfWeek query parameter is required',
      400,
      'Bad Request',
    );
  }

  const eventsToDelete: IEvent[] = await Event.find({ dayOfWeek });

  if (eventsToDelete.length === 0) {
    throw new AppError(
      'No events found for the specified dayOfWeek',
      404,
      'Not Found',
    );
  }

  await Event.deleteMany({ dayOfWeek });

  return {
    deletedEvents: eventsToDelete,
  };
};
