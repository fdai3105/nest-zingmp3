export function response(status = 200, message: 'Success', data: any) {
  return {
    err: status,
    msg: message,
    data: data,
  };
}
