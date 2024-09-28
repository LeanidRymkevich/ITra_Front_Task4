import { ERROR_MSGs } from '../types/enums';

export default class UnauthorizedError extends Error {
  constructor() {
    super(ERROR_MSGs.UNAUTHORIZED);
  }
}
