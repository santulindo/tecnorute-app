export type Category = {
id: string;
name: string;
};


export type Vehicle = {
id: string;
name: string;
plate: string;
capacityKg: number;
image?: string;
};


export type Route = {
id: string;
title: string;
origin: string;
destination: string;
durationMin: number;
price: number; // price to hire route/transfer
vehicleId: string;
category: string;
image?: string;
};


export type Shipment = {
id: string;
routeId: string;
description: string;
weightKg: number;
quantity: number;
};


export type User = {
id: string;
name: string;
email: string;
avatar?: string;
};