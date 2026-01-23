/**
 * Custom error classes for the African States and Tribes library
 */

export class InvalidCountryCodeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidCountryCodeError';
  }
}

export class TribeDataNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TribeDataNotFoundError';
  }
}

export class DataLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DataLoadError';
  }
}