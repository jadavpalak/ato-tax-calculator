## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/): Ensure that Node.js latest version, is installed on your system, as this project utilizes the latest versions of TypeScript and Nodemon.
- [npm](https://www.npmjs.com/): npm is the package manager for Node.js and comes with the Node.js installation.

## Installation

Clone the repository to your local machine:

```
git clone https://github.com/jadavpalak/ato-tax-calculator.git
```

Navigate to the project directory:

```
cd ato-tax-calculator/
```

Install the project dependencies including TypeScript and Nodemon:

```
npm i
```

## Usage

For development purposes, you can run the application using Nodemon to automatically restart the server when changes are detected. Execute the following command:

```
npm run dev
```
Execute the test cases with following command:

```
npm run test
```

This will start the server at `http://localhost:3000` by default. You can change the port in the `src/index.ts` file or create an `.env` file to manage the environt-specific variables separately.

For production, you can build the TypeScript files and then start the server. Run the following commands:

```
npm run build
npm start
```

## Project Structure

The project structure is organized as follows:

- `src`: Contains TypeScript source files
    - `index.ts`: Configures and starts the Express application
- `dist`: Output directory created during build for compiled TypeScript files
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration

You can customize the project configuration i nthe `tsconfig.json` file and adjust the server settings in the `src/index.ts` file


![image](https://github.com/jadavpalak/ato-tax-calculator/assets/25167163/15d508e9-6361-4e50-972e-3f5b557428db)



https://github.com/jadavpalak/ato-tax-calculator/assets/25167163/451a0f4a-3e19-4330-9eb7-778b43cc9c71


