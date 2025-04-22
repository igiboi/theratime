export type Therapist = {
  id: string;
  name: string;
};

export function useTherapists() {
  const therapists: Therapist[] = [
    { id: '1', name: 'Dr. Taylor' },
    { id: '2', name: 'Dr. Kim' },
  ];
  return therapists;
}
