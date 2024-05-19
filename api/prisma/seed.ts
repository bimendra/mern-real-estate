// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { addresses } from '../mock-data/addresses';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

function generateImageUrls(address: string) {
  const mainImageUrl = `https://placehold.co/1200x900?text=${encodeURIComponent(address)}`;
  const thumbnailUrl = `https://placehold.co/600x450?text=${encodeURIComponent(address)}`;
  return {
    main: mainImageUrl,
    thumbnail: thumbnailUrl,
  };
}

async function main() {
  const agencies = [];

  // Create 10 agencies
  for (let i = 0; i < 10; i++) {
    const agency = await prisma.agency.create({
      data: {
        name: faker.company.name(),
        address: faker.location.streetAddress({ useFullAddress: true }),
        description: faker.company.catchPhrase(),
        logo: `https://placehold.co/360x360`,
        coverImage: `https://placehold.co/1400x360`,
      },
    });
    agencies.push(agency);
  }

  const agents = [];

  // Create 10-20 agents for each agency
  for (const agency of agencies) {
    const numAgents = faker.number.int({ min: 10, max: 20 });
    for (let j = 0; j < numAgents; j++) {
      const user = await prisma.user.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          avatar: faker.image.avatar(),
          createdAt: new Date(),
        },
      });

      const agent = await prisma.agent.create({
        data: {
          userId: user.id,
          agencyId: agency.id,
        },
      });
      agents.push(agent);
    }
  }

  // Create listings
  for (let address of addresses.slice(0, 10)) {
    const images = Array.from(
      { length: faker.number.int({ min: 10, max: 20 }) },
      () => generateImageUrls(address),
    );

    const agent = faker.helpers.arrayElement(agents);

    await prisma.listing.create({
      data: {
        address: address,
        listingState: 'published',
        googlePlaceId: faker.string.uuid(),
        description: faker.lorem.paragraph(),
        price: faker.number.float({
          min: 100000,
          max: 1000000,
          precision: 0.01,
        }),
        bedrooms: faker.number.int({ min: 1, max: 5 }),
        baths: faker.number.int({ min: 1, max: 3 }),
        carSpaces: faker.number.int({ min: 0, max: 3 }),
        landSize: faker.number.float({
          min: 500,
          max: 10000,
          precision: 0.01,
        }),
        lat: faker.location.latitude(),
        lng: faker.location.latitude(),
        listingType: faker.helpers.arrayElement(['sale', 'rent']),
        propertyType: faker.helpers.arrayElement([
          'house',
          'townHouse',
          'apartmentUnit',
          'villa',
        ]),
        outdoorFeatures: faker.helpers.arrayElements([
          'swimmingPool',
          'garage',
          'balcony',
          'outdoorArea',
          'undercoverParking',
          'fullyFenced',
          'tennisCourt',
          'shed',
          'outdoorSpa',
        ]),
        indoorFeatures: faker.helpers.arrayElements([
          'ensuite',
          'dishwasher',
          'study',
          'robes',
        ]),
        energyFeatures: faker.helpers.arrayElements([
          'solarPanels',
          'highEnergyEfficiency',
          'solarHotwater',
          'waterTank',
        ]),
        climateControlFeatures: faker.helpers.arrayElements([
          'airConditioning',
          'heating',
          'fireplace',
        ]),
        accessibilityFeatures: faker.helpers.arrayElements([
          'singleStory',
          'stepFreeEntry',
          'elavator',
          'wideDoorways',
          'rollInShower',
          'accessibleParking',
          'bathroomGrabRails',
        ]),
        propertyRequirements: faker.helpers.arrayElements([
          'furnished',
          'petsConsidered',
          'na',
        ]),
        images: {
          create: images.map((image) => ({
            main: image.main,
            thumbnail: image.thumbnail,
          })),
        },
        agentId: agent.id,
        agencyId: agent.agencyId,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
