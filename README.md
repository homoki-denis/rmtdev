# RMTDev - React Modern TypeScript Development

A modern React application built with TypeScript, Vite, and a carefully selected set of tools for optimal development experience.

## 🚀 Tech Stack

### Core Technologies

- **React 18** - Latest version of React with concurrent features
- **TypeScript** - For type-safe development
- **Vite** - Next-generation frontend tooling
- **React Query** - For efficient server state management
- **Radix UI Icons** - Beautiful and accessible icons
- **React Hot Toast** - Elegant toast notifications

### Development Tools

- **ESLint** - Code linting and style enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite** - Fast development server and build tool

## 📁 Project Structure

```
src/
├── components/     # Reusable React components
├── contexts/       # React context providers
├── lib/           # Utility functions and shared logic
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## 🛠️ Development Setup

1. **Prerequisites**

   - Node.js (Latest LTS version recommended)
   - npm or yarn package manager

2. **Installation**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for Production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🔍 Available Scripts

- `dev` - Start development server with hot reload
- `build` - Build the application for production
- `preview` - Preview the production build locally
- `lint` - Run ESLint to check code quality

## 🎯 Features

- ⚡️ Lightning-fast development with Vite
- 🔒 Type safety with TypeScript
- 🎨 Modern UI components with Radix UI
- 🔄 Efficient data fetching with React Query
- 📱 Responsive design
- 🔔 Toast notifications for better UX

## 📝 Code Quality

The project uses ESLint with TypeScript-specific rules to maintain code quality. The configuration includes:

- TypeScript-aware linting rules
- React best practices
- Modern JavaScript features
- Code style consistency

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using modern web technologies

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# rmtdev
# rmtdev
