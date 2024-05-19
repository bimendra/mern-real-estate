import {
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  IsObject,
  IsOptional,
} from 'class-validator';
import {
  ListingType,
  PropertyType,
  OutdoorFeature,
  IndoorFeature,
  EnergyFeature,
  ClimatControlFeature,
  AccessibilityFeature,
  PropertyRequirement,
} from '@prisma/client';
import { IsObjectId } from 'class-validator-mongo-object-id';

class ImageDto {
  @IsString()
  main: string;

  @IsString()
  thumbnail: string;
}

export class CreateListingDraftDto {
  @IsString()
  address: string;

  @IsString()
  googlePlaceId: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  bedrooms: number;

  @IsOptional()
  @IsNumber()
  baths: number;

  @IsOptional()
  @IsNumber()
  carSpaces: number;

  @IsOptional()
  @IsNumber()
  landSize: number;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsOptional()
  @IsEnum(ListingType)
  listingType: ListingType;

  @IsOptional()
  @IsEnum(PropertyType)
  propertyType: PropertyType;

  @IsOptional()
  @IsArray()
  @IsEnum(OutdoorFeature, { each: true })
  outdoorFeatures: OutdoorFeature[];

  @IsOptional()
  @IsArray()
  @IsEnum(IndoorFeature, { each: true })
  indoorFeatures: IndoorFeature[];

  @IsOptional()
  @IsArray()
  @IsEnum(EnergyFeature, { each: true })
  energyFeatures: EnergyFeature[];

  @IsOptional()
  @IsArray()
  @IsEnum(ClimatControlFeature, { each: true })
  climateControlFeatures: ClimatControlFeature[];

  @IsOptional()
  @IsArray()
  @IsEnum(AccessibilityFeature, { each: true })
  accessibilityFeatures: AccessibilityFeature[];

  @IsOptional()
  @IsArray()
  @IsEnum(PropertyRequirement, { each: true })
  propertyRequirements: PropertyRequirement[];

  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  images: ImageDto[];

  @IsObjectId()
  agentId: string;

  @IsObjectId()
  agencyId: string;
}
