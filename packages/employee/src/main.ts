import { NestFactory } from '@nestjs/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { EmployeeModule } from './employee.module';


export const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(EmployeeModule, new FastifyAdapter());
  await app.listen(3000);
};

bootstrap();
