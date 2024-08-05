class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly error: string;

  constructor(message: string, statusCode = 400, error: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default AppError;
