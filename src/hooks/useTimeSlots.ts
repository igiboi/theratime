import { useState } from 'react';
import { TimeSlot } from '../types';

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

  const addSlot = (slot: TimeSlot) => {
    setSlots((prev) => [...prev, slot]);
  };

  const bookSlot = (slotId: string) => {
    setSlots((prev) => prev.filter((slot) => slot.id !== slotId));
  };

  return { slots, addSlot, bookSlot };
}
