const response = (statusCode: Number, message?: String) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify({
      message: message || 'Ok'
    })
  }
}

export { response }