export function response(status = 200, message: string, data: any) {
  return {
    status: status ?? -1,
    message: message ?? 'Lỗi không xác định -1',
    data: data,
  };
}
