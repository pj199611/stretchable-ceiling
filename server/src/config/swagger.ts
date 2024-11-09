import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'This is the API documentation for your Express application',
    },
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' },
            category: { type: 'string' },
            height: { type: 'number' },
            width: { type: 'number' },
            area: { type: 'number' },
            shape: { type: 'string' },
            customShape: { type: 'string' },
            imageUrl: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Order: {
          type: 'object',
          properties: {
            user: { type: 'string' },
            products: {
              type: 'array',
              items: { $ref: '#/components/schemas/OrderProduct' },
            },
            totalAmount: { type: 'number' },
            status: { type: 'string' },
            remarks: { type: 'string' },
            shippingAddress: { $ref: '#/components/schemas/ShippingAddress' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        User: {
          type: 'object',
          properties: {
            email: { type: 'string' },
            password: { type: 'string' },
            role: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        Client: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            phoneNumber: { type: 'string' },
            email: { type: 'string' },
            address: { type: 'string' },
            city: { type: 'string' },
            state: { type: 'string' },
            architectId: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        OrderProduct: {
          type: 'object',
          properties: {
            product: { type: 'string' },
            quantity: { type: 'number' },
            width: { type: 'number' },
            height: { type: 'number' },
            area: { type: 'number' },
            shape: {
              type: 'array',
              items: { type: 'string' },
            },
            customShape: { type: 'string' },
          },
        },
        ShippingAddress: {
          type: 'object',
          properties: {
            address: { type: 'string' },
            city: { type: 'string' },
            postalCode: { type: 'string' },
            country: { type: 'string' },
          },
        },
      },
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
