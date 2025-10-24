export type RootDrawerParamList = {
MainTabs: undefined;
Category: { id: string } | undefined;
};


export type MainTabsParamList = {
HomeStack: undefined;
ShipmentsStack: undefined;
ProfileStack: undefined;
};


export type HomeStackParamList = {
Home: undefined;
RouteDetail: { id: string };
VehicleDetail: { id: string };
};


export type ShipmentsStackParamList = {
Shipments: undefined;
ShippingForm: undefined;
Payment: undefined;
Confirmation: undefined;
};