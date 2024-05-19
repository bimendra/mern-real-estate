"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRequirement = exports.AccessibilityFeature = exports.ClimateControlFeature = exports.EnergyFeature = exports.IndoorFeature = exports.OutdoorFeature = exports.PropertyType = exports.ListingType = void 0;
var ListingType;
(function (ListingType) {
    ListingType["Sale"] = "sale";
    ListingType["Rent"] = "rent";
})(ListingType || (exports.ListingType = ListingType = {}));
var PropertyType;
(function (PropertyType) {
    PropertyType["House"] = "house";
    PropertyType["TownHouse"] = "townHouse";
    PropertyType["ApartmentUnit"] = "apartmentUnit";
    PropertyType["Villa"] = "villa";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
var OutdoorFeature;
(function (OutdoorFeature) {
    OutdoorFeature["SwimmingPool"] = "swimmingPool";
    OutdoorFeature["Garage"] = "garage";
    OutdoorFeature["Balcony"] = "balcony";
    OutdoorFeature["OutdoorArea"] = "outdoorArea";
    OutdoorFeature["UndercoverParking"] = "undercoverParking";
    OutdoorFeature["FullyFenced"] = "fullyFenced";
    OutdoorFeature["TennisCourt"] = "tennisCourt";
    OutdoorFeature["Shed"] = "shed";
    OutdoorFeature["OutdoorSpa"] = "outdoorSpa";
})(OutdoorFeature || (exports.OutdoorFeature = OutdoorFeature = {}));
var IndoorFeature;
(function (IndoorFeature) {
    IndoorFeature["Ensuite"] = "ensuite";
    IndoorFeature["Dishwasher"] = "dishwasher";
    IndoorFeature["Study"] = "study";
    IndoorFeature["Robes"] = "robes";
})(IndoorFeature || (exports.IndoorFeature = IndoorFeature = {}));
var EnergyFeature;
(function (EnergyFeature) {
    EnergyFeature["SolarPanels"] = "solarPanels";
    EnergyFeature["HighEnergyEfficiency"] = "highEnergyEfficiency";
    EnergyFeature["SolarHotwater"] = "solarHotwater";
    EnergyFeature["WaterTank"] = "waterTank";
})(EnergyFeature || (exports.EnergyFeature = EnergyFeature = {}));
var ClimateControlFeature;
(function (ClimateControlFeature) {
    ClimateControlFeature["AirConditioning"] = "airConditioning";
    ClimateControlFeature["Heating"] = "heating";
    ClimateControlFeature["Fireplace"] = "fireplace";
})(ClimateControlFeature || (exports.ClimateControlFeature = ClimateControlFeature = {}));
var AccessibilityFeature;
(function (AccessibilityFeature) {
    AccessibilityFeature["SingleStory"] = "singleStory";
    AccessibilityFeature["StepFreeEntry"] = "stepFreeEntry";
    AccessibilityFeature["Elevator"] = "elavator";
    AccessibilityFeature["WideDoorways"] = "wideDoorways";
    AccessibilityFeature["RollInShower"] = "rollInShower";
    AccessibilityFeature["AccessibleParking"] = "accessibleParking";
    AccessibilityFeature["BathroomGrabRails"] = "bathroomGrabRails";
})(AccessibilityFeature || (exports.AccessibilityFeature = AccessibilityFeature = {}));
var PropertyRequirement;
(function (PropertyRequirement) {
    PropertyRequirement["Furnished"] = "furnished";
    PropertyRequirement["PetsConsidered"] = "petsConsidered";
    PropertyRequirement["NA"] = "na";
})(PropertyRequirement || (exports.PropertyRequirement = PropertyRequirement = {}));
//# sourceMappingURL=enums.js.map