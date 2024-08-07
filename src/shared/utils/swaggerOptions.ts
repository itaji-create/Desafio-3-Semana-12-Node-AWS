import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Events API',
    version: '1.0.0',
    description: 'API for managing events',
  },
  servers: [
    {
      url: `http://${process.env.HOST}:${process.env.PORT}`,
    },
  ],
  components: {
    securitySchemes: {
      TokenAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    schemas: {
      Error: {
        type: 'object',
        properties: {
          statusCode: {
            type: 'integer',
            description: 'Error status code',
          },
          message: {
            type: 'string',
            description: 'Error message',
          },
          error: {
            type: 'string',
            description: 'Error type',
          },
        },
      },
      NotFoundError: {
        type: 'object',
        properties: {
          statusCode: {
            type: 'integer',
            description: 'Error status code',
            example: 404,
          },
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Not found',
          },
          error: {
            type: 'string',
            description: 'Error type',
            example: 'Not Found',
          },
        },
      },
      UnauthorizedError: {
        type: 'object',
        properties: {
          statusCode: {
            type: 'integer',
            description: 'Error status code',
            example: 401,
          },
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Not Authenticated',
          },
          error: {
            type: 'string',
            description: 'Error type',
            example: 'Unauthorized',
          },
        },
      },
      InternalServerError: {
        type: 'object',
        properties: {
          statusCode: {
            type: 'integer',
            description: 'Error status code',
            example: 500,
          },
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Something went wrong',
          },
          error: {
            type: 'string',
            description: 'Error type',
            example: 'Internal Server Error',
          },
        },
      },
      ValidationError: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'Error type',
            example: 'Validation Error',
          },
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                resource: {
                  type: 'string',
                  description: 'Resource field that caused the error',
                  example: 'field',
                },
                message: {
                  type: 'string',
                  description: 'Error message',
                  example: 'Invalid field',
                },
              },
            },
          },
        },
      },
      UserSignUp: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: 'First name of the user',
            example: 'Fulano ',
          },
          lastName: {
            type: 'string',
            description: 'Last name of the user',
            example: 'de Tal',
          },
          birthDate: {
            type: 'string',
            format: 'date',
            description: 'Birth date of the user',
            example: '2024-08-01',
          },
          city: {
            type: 'string',
            description: 'City of residence',
            example: 'New York',
          },
          country: {
            type: 'string',
            description: 'Country of residence',
            example: 'USA',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Email address of the user',
            example: 'testando@email.com',
          },
          password: {
            type: 'string',
            description: 'Password for the user account',
            example: 'password123',
          },
          confirmPassword: {
            type: 'string',
            description: 'Password confirmation',
            example: 'password123',
          },
        },
        required: [
          'firstName',
          'lastName',
          'birthDate',
          'city',
          'country',
          'email',
          'password',
          'confirmPassword',
        ],
      },
      UserSignIn: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            description: 'Email address of the user',
            example: 'testando@email.com',
          },
          password: {
            type: 'string',
            description: 'Password for the user account',
            example: 'password123',
          },
        },
        required: ['email', 'password'],
      },
      User: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: 'First name of the user',
            example: 'Fulano',
          },
          lastName: {
            type: 'string',
            description: 'Last name of the user',
            example: 'de tal',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Email address of the user',
            example: 'fulano@example.com',
          },
        },
        required: ['firstName', 'lastName', 'email'],
      },
      Identification: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier',
            example: '60d0fe4f5311236168a109ca',
          },
        },
        required: ['_id'],
      },
      EventInput: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Event description',
            example: 'Weekly team meeting',
          },
          dayOfWeek: {
            type: 'string',
            description: 'Day of the week when the event occurs',
            enum: [
              'sunday',
              'monday',
              'tuesday',
              'wednesday',
              'thursday',
              'friday',
              'saturday',
            ],
            example: 'monday',
          },
        },
        required: ['firstName', 'lastName', 'email'],
      },
      Event: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Event ID',
            example: '60c72b2f9b1e8e4e8c8d1234',
          },
          description: {
            type: 'string',
            description: 'Event description',
            example: 'Weekly team meeting',
          },
          dayOfWeek: {
            type: 'string',
            description: 'Day of the week when the event occurs',
            enum: [
              'sunday',
              'monday',
              'tuesday',
              'wednesday',
              'thursday',
              'friday',
              'saturday',
            ],
            example: 'monday',
          },
          userId: {
            type: 'string',
            description: 'User ID associated with the event',
            example: '60c72b2f9b1e8e4e8c8d5678',
          },
        },
        required: ['description', 'dayOfWeek', 'userId'],
      },
    },
  },
  security: [
    {
      TokenAuth: [],
    },
  ],
};

const options: swaggerJSDoc.Options = {
  swaggerDefinition,
  apis: ['./src/modules/user/routes/*.ts', './src/modules/events/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
