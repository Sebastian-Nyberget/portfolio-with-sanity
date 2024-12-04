# Next.js Portfolio with Sanity, Prisma, Supabase, and Kinde Authentication

This is a portfolio project built with **Next.js** that integrates **Sanity** as a CMS, **Prisma** for database management, **Supabase** for storage, and **Kinde** for authentication. It provides a robust backend infrastructure and an easy-to-use frontend to showcase projects, manage content, and handle user authentication.

## Technologies Used

- **Next.js**: React-based framework for building server-side rendered applications.
- **Sanity**: A headless CMS for managing and displaying content such as projects, blogs, and more.
- **Prisma**: ORM for interacting with the database and handling data modeling.
- **Supabase**: Open-source backend-as-a-service for managing the database, authentication, and file storage.
- **Kinde**: Authentication service to manage user login, roles, and permissions.

## Features

- Portfolio showcase with dynamic content fetched from Sanity CMS
- User authentication with Kinde (login/logout, user management)
- Database and data models handled with Prisma
- File storage for media assets using Supabase
- Server-side rendering (SSR) and API routes in Next.js
- Responsive and modern design for portfolio presentation

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
KINDE_CLIENT_ID=<Your client ID>
KINDE_CLIENT_SECRET=<Your client secret>
KINDE_ISSUER_URL=<Your issuer URL>
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/api/auth/creation

NEXT_PUBLIC_SANITY_ID=<Your sanity ID>

DATABASE_URL=<Your database URL>
DIRECT_URL=<Your direct URL>
```

### Installation
    
1. Clone the repository:
   ```sh
   git clone https://github.com/sebastian-nyberget/portfolio-with-sanity.git
  
2. Navigate to the project directory:
   ```sh
   cd portfolio-with-sanity
  
3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Scripts

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Builds the project for production
- **`npm start`** - Runs the production build
- **`npm run lint`** - Lints the codebase
- **`npm run format`** - Formats code using Prettier


