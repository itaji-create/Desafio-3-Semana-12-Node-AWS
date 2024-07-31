class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly error: string;

  constructor(statusCode = 400, message: string, error: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default AppError;
