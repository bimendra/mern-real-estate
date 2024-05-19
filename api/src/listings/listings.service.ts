import { ConflictException, Injectable } from '@nestjs/common';
import { CreateListingDraftDto } from './dto/create-listing-draft.dto';
import { UpdateListingDto } from './dto/update-listing-draft.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  async createDraft(createListingDraftDto: CreateListingDraftDto) {
    const { address, lat, lng, googlePlaceId, agentId } = createListingDraftDto;
    if (
      await this.prisma.listing.findUnique({
        where: {
          address,
        },
      })
    ) {
      throw new ConflictException(
        'A property with this address already exists',
      );
    }

    const agent = await this.prisma.agent.findUnique({
      where: {
        id: agentId,
      },
    });
    const listingDraft = await this.prisma.listing.create({
      data: {
        address: address,
        googlePlaceId: googlePlaceId,
        lat: lat,
        lng: lng,
        agentId: agent.id,
        agencyId: agent.agencyId,
      },
    });
    console.log(listingDraft);
    return 'hello';
  }

  findAll() {
    return this.prisma.listing.findMany();
  }

  findOne(id: string) {
    return this.prisma.listing.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return `This action updates a #${id} listing`;
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
