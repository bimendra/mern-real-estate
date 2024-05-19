import { PartialType } from '@nestjs/mapped-types';
import { CreateListingDraftDto } from './create-listing-draft.dto';

export class UpdateListingDto extends PartialType(CreateListingDraftDto) {}
