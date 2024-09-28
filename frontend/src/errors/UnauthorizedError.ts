export default class UnauthorizedError extends Error {
  constructor(msg: string | undefined) {
    super(msg);
  }
}
