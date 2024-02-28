# Learning Jest for Testing Angular Applications

Jest is a powerful JavaScript testing framework gaining popularity in the Angular community. It offers several advantages over traditional testing frameworks like Jasmine:

- **Faster Execution:** Jest boasts quicker test execution times compared to Jasmine.
- **Better Developer Experience:** Jest provides a streamlined experience with features like automatic test discovery and built-in matchers.
- **Wider Support:** As a framework-agnostic tool, Jest isn't limited to Angular, making it versatile for different projects.

## Installation

Install the necessary dependencies:

### npm

```bash
npm install --dev jest jest-preset-angular @types/jest
```

### yarn

```bash
yarn add --dev jest jest-preset-angular @types/jest
```

### Dependencies:

- `jest`: Jest testing platform.
- `jest-preset-angular`: Configuration preset with common settings for Angular.
- `@types/jest`: Jest types for TypeScript support.

### Setup

1. Create a `setup.jest.ts` file in the root directory of the application.

2. Add the following code to `setup.jest.ts`:

```bash
import 'jest-preset-angular/setup-jest';
```

### Configuration

Update the `tsconfig.spec.json` file:

```bash
"types": [
  "jest",
  "node"
]

```

Add Jest configuration to `package.json`:

```bash
"jest": {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": ["<rootDir>/src/setup.jest.ts"]
  }

```

### Scripts

Add these scripts to the `package.json`:

```bash
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}

```

These scripts allow the app to run tests, enable watch mode for continuous testing, and generate a coverage report.
