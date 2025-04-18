# Inner Crunch Website

Welcome to the Inner Crunch website! This project is dedicated to promoting our unique cereal brand, inspired by Buddha philosophy and designed to nourish both body and mind.

## Project Overview

Inner Crunch is not just a cereal; it's a journey towards mindfulness and wellness. Our brand embodies the principles of simplicity, balance, and harmony, offering products that are wholesome and fulfilling.

## Pages

- **About Us**: Learn about the story behind Inner Crunch and our commitment to quality and mindfulness.
- **Our Mission**: Discover our mission to promote health and well-being through nutritious cereals that resonate with the teachings of Buddha.
- **Our Products**: Explore our range of delicious cereals, crafted with care to provide you with the inner crunch you need to start your day right.

## Getting Started

To get started with the Inner Crunch website, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/inner-crunch-website.git
   cd inner-crunch-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Troubleshooting

If you encounter the following error while running the application:

```
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

You can resolve it by using the `--openssl-legacy-provider` flag. This has already been added to the `start` script in the `package.json` file.

Alternatively, you can set the environment variable manually:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework that provides a set of components and styles.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.

## Contributing

We welcome contributions to the Inner Crunch project! If you have suggestions or improvements, please feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for visiting the Inner Crunch website! We hope you find peace and nourishment in every bite.