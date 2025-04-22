import { useState } from 'react';
import { TimeSlot } from '@/types';

const initialSlots: TimeSlot[] = [
  {
    id: 'slot-1',
    date: '2025-04-25',
    startTime: '15:00',
    endTime: '15:30',
    therapistId: '1',
  },
];

export function useTimeSlots() {
  const [slots, setSlots] = useState<TimeSlot[]>(initialSlots);
  const [bookings, setBookings] = useState<TimeSlot[]>([]);

  const addSlot = (slot: TimeSlot) => {
    setSlots((prev) => [...prev, slot]);
  };

  const bookSlot = (slotId: string) => {
    const slotToBook = slots.find((s) => s.id === slotId);
    if (!slotToBook) return;

    setBookings((prev) => [...prev, slotToBook]);
    setSlots((prev) => prev.filter((s) => s.id !== slotId));
  };

  return {
    slots,
    bookings,
    addSlot,
    bookSlot,
  };
}
