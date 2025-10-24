import { Route } from '../types';


export const routes: Route[] = [
{ id: 'r1', title: 'Bogotá → Medellín', origin: 'Bogotá', destination: 'Medellín', durationMin: 300, price: 520000, vehicleId: 'v1', category: 'Long-distance', image: 'https://picsum.photos/400?1' },
{ id: 'r2', title: 'Bogotá → Cali', origin: 'Bogotá', destination: 'Cali', durationMin: 420, price: 680000, vehicleId: 'v3', category: 'Long-distance', image: 'https://picsum.photos/400?2' },
{ id: 'r3', title: 'Bogotá → Chía', origin: 'Bogotá', destination: 'Chía', durationMin: 40, price: 45000, vehicleId: 'v2', category: 'Regional', image: 'https://picsum.photos/400?3' },
{ id: 'r4', title: 'Medellín → Rionegro', origin: 'Medellín', destination: 'Rionegro', durationMin: 50, price: 60000, vehicleId: 'v2', category: 'Regional', image: 'https://picsum.photos/400?4' },
{ id: 'r5', title: 'Cali → Palmira', origin: 'Cali', destination: 'Palmira', durationMin: 70, price: 80000, vehicleId: 'v1', category: 'Regional', image: 'https://picsum.photos/400?5' }
];