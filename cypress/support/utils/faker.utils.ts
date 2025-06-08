import { faker } from '@faker-js/faker';
import { User } from '../api/types';

/**
 * Cria dados de usuário fake para testes
 * @returns Objeto com userName e password aleatórios
 */
export function createFakeUser(): User {
  return {
    userName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: faker.internet.password({
      length: 12,
      memorable: false,
      pattern: /[A-Za-z0-9]/,
      prefix: '!Aa1'
    }),
    email: faker.internet.email(),
    subjects: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    current_address: faker.location.streetAddress(),
    permanent_address: faker.location.streetAddress(),
    age: faker.number.int({ min: 18, max: 99 }),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    department: faker.commerce.department(),
    mobile: faker.phone.number({ style: 'national' }),
    date_of_birth: faker.date.birthdate({ min: 18, max: 99, mode: 'age' }),
    genre: faker.music.genre(),
    hobbies_list: ['Sports', 'Reading', 'Music'],
    state: faker.location.state(),
    city: faker.location.city(),
    user_subjects: ['Arts',   'Biology']
  };
}

/**
 * Gera um ISBN fake (apenas para exemplo)
 * @returns String com formato de ISBN
 */
export function createFakeISBN(): string {
  return faker.string.numeric(13);
}
