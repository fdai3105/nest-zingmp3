export function response(
  status = -1,
  message = 'Lỗi không xác định -1',
  data: any,
) {
  return {
    status: status,
    message: message,
    data: data,
  };
}
