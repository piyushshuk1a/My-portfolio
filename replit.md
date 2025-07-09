# Replit.md

## Overview

This is a modern portfolio website built with React and Express.js, featuring a personal portfolio for Piyush Shukla, a frontend developer and DSA enthusiast. The application showcases a professional portfolio with sections for hero, about, skills, projects, experience, and contact functionality. It includes a contact form that stores messages in a database and displays information about the developer's background, skills, and projects.

## System Architecture

### Full-Stack Architecture
The application follows a monorepo structure with separate client and server directories, sharing common schemas and types. It uses a modern React frontend with an Express.js backend API, configured for both development and production environments.

**Rationale**: This architecture provides clear separation of concerns while maintaining shared type safety between frontend and backend through the shared schema directory.

### Technology Stack
- **Frontend**: React 18 with TypeScript, Vite for bundling
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Radix UI components with Tailwind CSS
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Routing**: Wouter (lightweight React router)

## Key Components

### Frontend Architecture
- **Component Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Form Validation**: Zod schemas shared between client and server
- **Type Safety**: Full TypeScript implementation with shared types

### Backend Architecture
- **API Structure**: RESTful endpoints for contact form submission and message retrieval
- **Data Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Error Handling**: Centralized error handling middleware

### Database Schema
The application uses two main tables:
- **users**: Basic user management (id, username, password)
- **contact_messages**: Contact form submissions (id, name, email, subject, message, created_at)

**Rationale**: Simple schema design focused on the core functionality of a portfolio website with contact capability.

## Data Flow

### Contact Form Submission
1. User fills out contact form in the frontend
2. Form data is validated using Zod schema on client-side
3. Data is sent to `/api/contact` endpoint via POST request
4. Server validates data again using shared schema
5. Message is stored in database via storage interface
6. Success/error response sent back to client
7. Client displays toast notification

### Portfolio Content
- Static content is rendered from component data
- Project information and skills are hardcoded in components
- Navigation uses smooth scrolling to different sections
- Responsive design adapts to different screen sizes

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database operations with migration support

### UI and Animation
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production
- **TanStack Query**: Server state management

**Rationale**: These dependencies were chosen for their TypeScript support, performance, and developer experience.

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory using Vite
- Backend builds to `dist` directory using ESBuild
- Shared schemas are included in both builds

### Environment Configuration
- Development: Uses Vite dev server with HMR and Express backend
- Production: Serves static files from Express with API routes

### Database Migration
- Uses Drizzle Kit for database schema migrations
- Migration files generated in `./migrations` directory
- Database URL required via environment variable

**Rationale**: This setup provides fast development experience with HMR while maintaining production-ready static file serving.

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```